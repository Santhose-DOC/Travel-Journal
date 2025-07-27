const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  travelClass: String,
  guests: Number,
  arrivalDate: String,
  time: String,
  travelDays: Number,
  passportImage: String,
  place: String,
  message: String,
});

module.exports = mongoose.model('Booking', bookingSchema);
