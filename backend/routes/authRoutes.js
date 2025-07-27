import express from 'express';
import Register from '../models/registerModel.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    console.log("Received registration:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new Register({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Registered successfully' });
  } catch (error) {
    console.error("Error in /register:", error);
    res.status(500).json({ message: 'Registration failed due to server error' });
  }
});

export default router;
