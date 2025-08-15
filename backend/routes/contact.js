const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // --- Start of Validation ---
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // A simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email format.' });
    }
    // --- End of Validation ---

    try {
        const newContact = new Contact({
            name,
            email,
            message,
        });

        await newContact.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

module.exports = router;
