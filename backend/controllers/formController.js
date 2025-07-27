const Booking = require('../models/Booking');

const submitForm = async (req, res) => {
  try {
    const newBooking = new Booking({
      ...req.body,
      passportImage: req.file ? req.file.filename : null,
    });

    await newBooking.save();
    res.status(200).json({ message: 'Booking saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving booking' });
  }
};

module.exports = { submitForm };
