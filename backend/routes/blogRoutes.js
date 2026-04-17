const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { verifyApiKey } = require('../middleware/authMiddleware');

// All blog routes require API key
router.use(verifyApiKey);

// @route   GET /api/blogs
// @access  Public (API key required)
// @desc    Get all published blogs, optionally filter by category or featured
router.get('/', async (req, res) => {
  const { category, status, featured } = req.query;
  try {
    const query = { status: status || 'published' };
    if (category && category !== 'All') query.category = category;
    if (featured !== undefined) query.featured = featured === 'true';

    const blogs = await Blog.find(query).sort({ publishDate: -1 });
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/blogs
// @access  Public (API key required)
// @desc    Create a new blog post
router.post('/', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    const saved = await blog.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   GET /api/blogs/slug/:slug
// @access  Public (API key required)
// @desc    Get a single blog post by slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: 'published' });
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
