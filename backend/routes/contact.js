const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 🚨 NEW: Import the Brevo SDK (replaces nodemailer)
const SibApiV3Sdk = require('sib-api-v3-sdk');

const app = express();

// --- Middleware ---
app.use(cors({
    origin: 'https://choudharycodelabs.netlify.app', 
    methods: ['POST'],
}));
app.use(express.json());

// 🚨 CONFIGURE BREVO API CLIENT GLOBALLY
// This uses the BREVO_API_KEY set in your Render environment variables
const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // Reusable email model

// --- API Route for Contact Form ---
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    // 1. Set Email Parameters for Brevo API
    // The 'sender' email (process.env.EMAIL_USER) MUST be verified in your Brevo account.
    sendSmtpEmail.sender = {
        email: process.env.EMAIL_USER, 
        name: `${name} (via Portfolio)`,
    };
    
    // 'to' is your receiving address
    sendSmtpEmail.to = [{ email: process.env.EMAIL_USER }];
    
    // 'replyTo' is the user's email, for easy reply
    sendSmtpEmail.replyTo = { email: email };
    
    sendSmtpEmail.subject = `New Choudhary Code Labs form Submission from ${name}`;
    sendSmtpEmail.htmlContent = `
        <h2>New Message from your Choudhary Code Labs Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // 2. Send the Email via API Call (HTTPS/Port 443)
    try {
        // This makes an HTTPS API call, successfully bypassing the Render firewall.
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Brevo API Error:', error);
        // Return a generic 500 error to the client, logging the detailed API error on the server
        res.status(500).json({ 
            success: false, 
            error: `Failed to send message. Check Render logs for Brevo response.` 
        });
    }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
