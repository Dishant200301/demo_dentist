const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { verifyApiKey, optionalJWT } = require('../middleware/authMiddleware');

// All public booking routes require the clinic API key
// (This identifies which clinic the request is for and prevents abuse)
router.use(verifyApiKey);

// @route   POST /api/public/bookings
// @access  Public (API key required, login optional)
// @desc    Create a new booking request — goes to 'pending' status, admin approves
router.post('/bookings', optionalJWT, async (req, res) => {
  const { PatientName, PatientPhone, PatientEmail, date, arrivingTime, notes } = req.body;

  try {
    const bookingData = {
      PatientName,
      PatientPhone,
      PatientEmail,
      date,
      arrivingTime,
      notes,
      status: 'pending'
    };

    // Link to web user account if logged in
    if (req.user) {
      bookingData.webUserId = req.user._id;
    }

    console.log('Incoming Booking Request:', req.body);
    const booking = new Booking(bookingData);
    const created = await booking.save();

    return res.status(201).json({
      success: true,
      message: 'Booking request submitted successfully. We will confirm shortly.',
      data: created
    });
  } catch (error) {
    console.error('Booking Error Details:', {
      message: error.message,
      stack: error.stack,
      body: req.body
    });
    return res.status(400).json({ 
      success: false,
      message: error.message || 'Validation failed. Please check your inputs.',
      error: error
    });
  }
});

// @route   GET /api/public/bookings/status
// @access  Public (API key + reference number + phone)
// @desc    Track a booking by reference number without logging in
router.get('/bookings/status', async (req, res) => {
  const { reference, phone } = req.query;
  try {
    const booking = await Booking.findOne({
      bookingReference: reference,
      PatientPhone: phone
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found. Check your reference number and phone.' });
    }

    res.json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/public/bookings/cancel
// @access  Public (API key + reference + phone for verification)
// @desc    Cancel a pending booking
router.post('/bookings/cancel', async (req, res) => {
  const { bookingReference, phone } = req.body;
  try {
    const booking = await Booking.findOne({ bookingReference, PatientPhone: phone });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    if (booking.status !== 'pending') {
      return res.status(400).json({ message: `Cannot cancel a booking with status: ${booking.status}` });
    }
    booking.status = 'cancelled';
    await booking.save();
    res.json({ success: true, message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/public/bookings/my-bookings
// @access  Private (requires web user token)
// @desc    Get all bookings for the currently logged-in patient
router.get('/bookings/my-bookings', optionalJWT, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Login required to view your bookings' });
  }
  try {
    const bookings = await Booking.find({ webUserId: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/public/schedule/info
// @access  Public (API key required)
// @desc    Get clinic working hours for a given date (for slot generation on frontend)
router.get('/schedule/info', async (req, res) => {
  const { date } = req.query;
  // Static clinic hours — update this or pull from a Clinic settings model
  const clinicHours = {
    date,
    isHoliday: false,
    isHalfday: false,
    workingHours: {
      openTime: '09:00',
      closeTime: '18:00',
      breakStart: '13:00',
      breakEnd: '14:00'
    }
  };
  res.json({ success: true, data: clinicHours });
});

module.exports = router;
