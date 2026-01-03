import express from 'express';
import Enquiry from '../models/Enquiry.js';
import { protect, admin } from '../middleware/auth.js';
import pkg from 'nodemailer';
const { createTransport } = pkg;

const router = express.Router();

// Email transporter
const transporter = createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// @route   POST /api/enquiries
// @desc    Submit new enquiry (from website form)
// @access  Public
router.post('/', async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);

    // Send email notification to admin
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_USER,
        subject: `New Admission Enquiry - ${req.body.department}`,
        html: `
          <h2>New Admission Enquiry</h2>
          <p><strong>Name:</strong> ${req.body.firstName}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Phone:</strong> ${req.body.phone}</p>
          <p><strong>Department:</strong> ${req.body.department}</p>
          <p><strong>Comments:</strong> ${req.body.comments || 'N/A'}</p>
        `
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully. We will contact you soon!',
      data: enquiry
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   GET /api/enquiries
// @desc    Get all enquiries
// @access  Private/Admin
router.get('/', protect, admin, async (req, res) => {
  try {
    const { status, department, limit = 50, page = 1 } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (department) query.department = department;

    const enquiries = await Enquiry.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate('notes.addedBy', 'name email');

    const count = await Enquiry.countDocuments(query);

    res.json({
      success: true,
      count: enquiries.length,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      data: enquiries
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/enquiries/stats
// @desc    Get enquiry statistics
// @access  Private/Admin
router.get('/stats', protect, admin, async (req, res) => {
  try {
    const total = await Enquiry.countDocuments();
    const pending = await Enquiry.countDocuments({ status: 'pending' });
    const contacted = await Enquiry.countDocuments({ status: 'contacted' });
    const converted = await Enquiry.countDocuments({ status: 'converted' });
    
    res.json({
      success: true,
      data: { total, pending, contacted, converted }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/enquiries/:id
// @desc    Get single enquiry
// @access  Private/Admin
router.get('/:id', protect, admin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id).populate('notes.addedBy', 'name email');
    
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    res.json({ success: true, data: enquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   PUT /api/enquiries/:id/status
// @desc    Update enquiry status
// @access  Private/Admin
router.put('/:id/status', protect, admin, async (req, res) => {
  try {
    const { status } = req.body;
    
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    res.json({ success: true, data: enquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   POST /api/enquiries/:id/notes
// @desc    Add note to enquiry
// @access  Private/Admin
router.post('/:id/notes', protect, async (req, res) => {
  try {
    const { text } = req.body;
    
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    enquiry.notes.push({
      text,
      addedBy: req.user._id
    });

    await enquiry.save();

    res.json({ success: true, data: enquiry });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   DELETE /api/enquiries/:id
// @desc    Delete enquiry
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Enquiry not found' });
    }

    res.json({ success: true, message: 'Enquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
