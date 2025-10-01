const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- Middleware ---
// Using general CORS policy, which can be secured later if needed
app.use(cors());
app.use(express.json());

// --- Database Connection ---
const connectDB = async () => {
    try {
        // FIX: Removed deprecated useNewUrlParser and useUnifiedTopology options
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

app.get('/', (req, res) => {
    res.status(200).send('Backend is running!');
});

// --- Email Sending Route ---
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // 1. Nodemailer Transporter Setup (FIXED: Using Brevo SMTP via environment variables)
    // This resolves the Connection Timeout issue on Render.
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // e.g., smtp-relay.brevo.com
        port: process.env.SMTP_PORT, // e.g., 587
        secure: false,               // Must be false for Port 587 (enables STARTTLS)
        auth: {
            user: process.env.SMTP_USER, // Brevo Login/Username
            pass: process.env.SMTP_PASS, // Brevo SMTP Key/Password
        },
    });

    // 2. Define Email Content
    const mailOptions = {
        // The 'from' address (EMAIL_USER) MUST be verified in Brevo.
        // We use the sender's name and set 'replyTo' to the actual user's email.
        from: `"${name} (Portfolio)" <${process.env.EMAIL_USER}>`, 
        to: process.env.EMAIL_USER,
        replyTo: email, // NEW: Allows you to reply directly to the person who filled out the form.
        subject: `New Choudhary Code Labs Portfolio Message from ${name}`,
        html: `
            <h3>You've received a new message:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    // 3. Send the Email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        // Return the specific error message for better debugging
        res.status(500).json({ success: false, error: error.message || 'Failed to send message.' });
    }
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
