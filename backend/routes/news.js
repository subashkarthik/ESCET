import express from 'express';
import News from '../models/News.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/news
// @desc    Get all news (published only for public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { limit = 10, page = 1, category } = req.query;
    
    const query = { isPublished: true };
    if (category) query.category = category;

    const news = await News.find(query)
      .sort({ isPinned: -1, date: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await News.countDocuments(query);

    res.json({
      success: true,
      count: news.length,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      data: news
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/news/all
// @desc    Get all news (including unpublished for admin)
// @access  Private/Admin
router.get('/all', protect, admin, async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json({ success: true, count: news.length, data: news });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   GET /api/news/:id
// @desc    Get single news item
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const newsItem = await News.findById(req.params.id);
    
    if (!newsItem) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    res.json({ success: true, data: newsItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// @route   POST /api/news
// @desc    Create news item
// @access  Private/Admin
router.post('/', protect, admin, async (req, res) => {
  try {
    const newsItem = await News.create(req.body);
    res.status(201).json({ success: true, data: newsItem });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   PUT /api/news/:id
// @desc    Update news item
// @access  Private/Admin
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const newsItem = await News.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!newsItem) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    res.json({ success: true, data: newsItem });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// @route   DELETE /api/news/:id
// @desc    Delete news item
// @access  Private/Admin
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const newsItem = await News.findByIdAndDelete(req.params.id);

    if (!newsItem) {
      return res.status(404).json({ success: false, message: 'News not found' });
    }

    res.json({ success: true, message: 'News deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
