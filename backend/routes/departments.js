import express from 'express';
import Department from '../models/Department.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/departments
// @desc    Get all departments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find({ isActive: true });
    res.json({
      success: true,
      count: departments.length,
      data: departments
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/departments/:id
// @desc    Get single department
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findOne({ id: req.params.id });
    
    if (!department) {
      return res.status(404).json({ success: false, message: 'Department not found' });
    }

    res.json({ success: true, data: department });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/departments
// @desc    Create new department
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json({ success: true, data: department });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   PUT /api/departments/:id
// @desc    Update department
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const department = await Department.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!department) {
      return res.status(404).json({ success: false, message: 'Department not found' });
    }

    res.json({ success: true, data: department });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   DELETE /api/departments/:id
// @desc    Delete department (soft delete)
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const department = await Department.findOneAndUpdate(
      { id: req.params.id },
      { isActive: false },
      { new: true }
    );

    if (!department) {
      return res.status(404).json({ success: false, message: 'Department not found' });
    }

    res.json({ success: true, message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
