const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  // Auto-generated reference number for patient to track their booking
  bookingReference: { type: String, unique: true },

  // Patient details (captured at booking time — patient may not be registered)
  PatientName: { type: String, required: true },
  PatientPhone: { type: String, required: true },
  PatientEmail: { type: String },

  // Link to registered web user (optional — public booking doesn't require login)
  webUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'WebUser' },

  // Appointment slot details
  date: { type: String, required: true },         // Format: YYYY-MM-DD
  arrivingTime: { type: String, required: true }, // Format: HH:MM (24h)

  // Booking lifecycle
  status: {
    type: String,
    enum: ['pending', 'approved', 'booked', 'attended', 'not-attended', 'cancelled', 'rejected'],
    default: 'pending'
  },

  // Optional notes from patient
  notes: { type: String },

  // Admin notes (set by clinic)
  adminNotes: { type: String },

  createdAt: { type: Date, default: Date.now }
});

// Auto-generate bookingReference before saving
BookingSchema.pre('save', async function() {
  if (!this.bookingReference) {
    const count = await mongoose.model('Booking').countDocuments();
    this.bookingReference = `EYE-${Date.now()}-${String(count + 1).padStart(4, '0')}`;
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
