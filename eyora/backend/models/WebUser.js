const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const WebUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: String },           // Format: YYYY-MM-DD
  gender: { type: String, enum: ['Male', 'Female', 'Other', 'Prefer not to say'] },
  address: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
WebUserSchema.pre('save', async function() {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
WebUserSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('WebUser', WebUserSchema);
