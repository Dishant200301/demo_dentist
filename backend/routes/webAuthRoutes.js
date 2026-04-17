const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const WebUser = require('../models/WebUser');
const { verifyJWT } = require('../middleware/authMiddleware');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'dentist_secret', {
    expiresIn: '30d'
  });
};

// @route   POST /api/web-auth/register
// @access  Public
router.post('/register', async (req, res) => {
  const { name, email, phone, password, dateOfBirth, gender, address } = req.body;
  try {
    const userExists = await WebUser.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    console.log('Incoming Register Request:', { ...req.body, password: '[REDACTED]' });
    const user = await WebUser.create({ name, email, phone, password, dateOfBirth, gender, address });

    if (user) {
      return res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          token: generateToken(user._id)
        }
      });
    } else {
      return res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Register Error Details:', {
      message: error.message,
      stack: error.stack
    });
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Server error during registration' 
    });
  }
});

// @route   POST /api/web-auth/login
// @access  Public
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await WebUser.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          token: generateToken(user._id)
        }
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/web-auth/me
// @access  Private (requires token)
router.get('/me', verifyJWT, async (req, res) => {
  try {
    res.json({ success: true, data: req.user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/web-auth/profile
// @access  Private
router.put('/profile', verifyJWT, async (req, res) => {
  try {
    const user = await WebUser.findById(req.user._id);
    if (user) {
      user.name        = req.body.name        || user.name;
      user.phone       = req.body.phone       || user.phone;
      user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
      user.gender      = req.body.gender      || user.gender;
      user.address     = req.body.address     || user.address;

      // Only update password if provided
      if (req.body.password) {
        user.password = req.body.password; // Pre-save hook will re-hash
      }

      const updated = await user.save();
      res.json({
        success: true,
        data: {
          _id: updated._id,
          name: updated.name,
          email: updated.email,
          phone: updated.phone,
          dateOfBirth: updated.dateOfBirth,
          gender: updated.gender,
          address: updated.address
        }
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
