const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors({
    // It's good practice to secure CORS to your Netlify domain
    origin: 'https://choudharycodelabs.netlify.app', 
    methods: ['POST'],
}));
app.use(express.json());

// --- API Route for Contact Form ---
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // 1. Nodemailer Transporter Setup (FIXED: Using Brevo SMTP via environment variables)
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // e.g., smtp-relay.brevo.com
        port: process.env.SMTP_PORT, // e.g., 587
        secure: false,               // Must be false for Port 587 (enables STARTTLS)
        auth: {
            user: process.env.SMTP_USER, // Brevo Login/Username
            pass: process.env.SMTP_PASS, // Brevo SMTP Key/Password
        },
        // Removed unnecessary connectionTimeout and rejectUnauthorized flags
    });
    
    // NOTE: Removed the redundant 'transporter.verify()' block, 
    // as the primary send operation will catch any connection errors.

    // 2. Mail Options (Updated: 'from' address must be the verified sender)
    const mailOptions = {
        // The 'from' address MUST be your verified email (EMAIL_USER) in Brevo.
        // We set the sender's name and use 'replyTo' to direct replies correctly.
        from: `"${name} (via Portfolio)" <${process.env.EMAIL_USER}>`, 
        to: process.env.EMAIL_USER, // Your receiving address
        replyTo: email, // Set the actual user's email for easy reply
        subject: `New Choudhary Code Labs form Submission from ${name}`,
        html: `
            <h2>New Message from your Choudhary Code Labs Portfolio Contact Form</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    // 3. Send Email 
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        // The error message from the reliable SMTP service (Brevo) will now be returned
        res.status(500).json({ success: false, error: error.message });
    }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
