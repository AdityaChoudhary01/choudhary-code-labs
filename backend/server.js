const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 🚨 NEW: Import the Brevo SDK (replaces Nodemailer)
const SibApiV3Sdk = require('sib-api-v3-sdk');

const app = express();
app.use(cors());
app.use(express.json());

// --- Database Connection ---
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

// 🚨 CONFIGURE BREVO API CLIENT
const defaultClient = SibApiV3Sdk.ApiClient.instance;
// Set API Key authorization from Render environment
defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // Reusable email object

app.get('/', (req, res) => {
    res.status(200).send('Backend is running!');
});

// --- Email Sending Route (Using Brevo API) ---
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }
    
    // 1. Set Email Parameters for Brevo
    sendSmtpEmail.sender = {
        // The email in 'from' must be verified in Brevo.
        email: process.env.EMAIL_USER, 
        name: `${name} (via Portfolio)`,
    };
    sendSmtpEmail.to = [{ email: process.env.EMAIL_USER }];
    sendSmtpEmail.replyTo = { email: email };
    sendSmtpEmail.subject = `New Choudhary Code Labs Portfolio Message from ${name}`;
    sendSmtpEmail.htmlContent = `
        <h3>You've received a new message:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // 2. Send the Email via API Call (HTTPS/Port 443)
    try {
        // This makes an HTTPS call, bypassing the Render firewall.
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Brevo API Error:', error);
        // Brevo API errors are usually detailed JSON responses
        res.status(500).json({ 
            success: false, 
            error: `API Failed. Check Render logs for Brevo response. Error: ${error.message}` 
        });
    }
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
