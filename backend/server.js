import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import formRoutes from './routes/formRoutes.js';
import authRoutes from './routes/authRoutes.js'; // ✅ Add this line

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

console.log("Connecting to MongoDB at:", process.env.MONGO_URI);


app.use('/uploads', express.static(path.join('uploads')));

// ✅ Register both route files
app.use('/api/form', formRoutes);  
app.use('/api/auth', authRoutes); // ✅ Add this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
