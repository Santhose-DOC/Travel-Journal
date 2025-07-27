import express from 'express';
import Register from '../models/registerModel.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Optional: validate fields here

    const newUser = new Register({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

export default router;
