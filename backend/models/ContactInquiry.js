const mongoose = require('mongoose');

const ContactInquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String },
  message: { type: String, required: true },
  source: { type: String, default: 'website-contact' }, // Where the inquiry came from
  status: { type: String, enum: ['new', 'read', 'replied', 'closed'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ContactInquiry', ContactInquirySchema);
