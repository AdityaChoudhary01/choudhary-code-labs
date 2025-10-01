const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // To handle cross-origin requests
require('dotenv').config(); // To use environment variables

const app = express();

// --- Middleware ---
// 1. Enable CORS to allow your frontend to make requests to this backend
app.use(cors());
// 2. Middleware to parse JSON bodies
app.use(express.json());


// --- API Route for Contact Form ---
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // Nodemailer Transporter Setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email address from environment variables
            pass: process.env.EMAIL_PASS, // Your email App Password from environment variables
        },
    });

    // Mail Options
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_USER,
        subject: `New Choudhary Code Labs form Submission from ${name}`,
        html: `
            <h2>New Message from your Choudhary Code Labs Portfolio Contact Form</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    // Send the Email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } 
    catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
}
});


// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
