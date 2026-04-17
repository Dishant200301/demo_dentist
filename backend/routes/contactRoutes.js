const express = require('express');
const router = express.Router();
const ContactInquiry = require('../models/ContactInquiry');
const { verifyApiKey } = require('../middleware/authMiddleware');

// @route   POST /api/contact-inquiries
// @access  Public (API key required)
// @desc    Submit a contact form inquiry
router.post('/', verifyApiKey, async (req, res) => {
  const { name, email, phone, subject, message, source } = req.body;
  try {
    const inquiry = new ContactInquiry({
      name, email, phone, subject, message,
      source: source || 'website-contact'
    });
    await inquiry.save();
    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! We will get back to you soon.'
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
