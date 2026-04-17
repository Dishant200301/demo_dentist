const jwt = require('jsonwebtoken');
const WebUser = require('../models/WebUser');

// Verify JWT token from Authorization header
const verifyJWT = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dentist_secret');
      req.user = await WebUser.findById(decoded.id).select('-password');
      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }
      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Verify API key for public/clinic-identified endpoints
const verifyApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.CLINIC_API_KEY) {
    return res.status(403).json({ message: 'Invalid or missing API key' });
  }
  next();
};

// Optional JWT — attach user if token present, but don't block if missing
const optionalJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dentist_secret');
      req.user = await WebUser.findById(decoded.id).select('-password');
    } catch (e) {
      // Ignore invalid token for optional auth
    }
  }
  next();
};

module.exports = { verifyJWT, verifyApiKey, optionalJWT };
