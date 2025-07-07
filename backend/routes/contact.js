import express from 'express';
import Contact from '../models/Contact.js';
import dotenv from 'dotenv';
const router = express.Router();
dotenv.config();

// Strong passcode for admin dashboard
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE; // Change this to your secret

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Contact message saved successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact message.' });
  }
});

// Admin dashboard route to get all contacts (protected by passcode)
router.get('/admin', async (req, res) => {
  const { passcode } = req.query;
  if (passcode !== ADMIN_PASSCODE) {
    return res.status(401).json({ error: 'Unauthorized: Invalid passcode.' });
  }
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
});

export default router; 