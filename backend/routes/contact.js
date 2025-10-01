const express = require('express');
const SibApiV3Sdk = require('sib-api-v3-sdk'); // Import Brevo SDK
const router = express.Router();

// NOTE: We assume process.env.BREVO_API_KEY is set in the Render environment.

// Configure Brevo API Client
const defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// --- API Route for Contact Form ---
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }
    
    // Set Email Parameters for Brevo API
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

    // The 'sender' email (EMAIL_USER) MUST be verified in your Brevo account.
    sendSmtpEmail.sender = {
        email: process.env.EMAIL_USER, 
        name: `${name} (via Portfolio)`,
    };
    
    // 'to' is your receiving address
    sendSmtpEmail.to = [{ email: process.env.EMAIL_USER }];
    
    // 'replyTo' is the user's email, for easy reply
    sendSmtpEmail.replyTo = { email: email };
    
    sendSmtpEmail.subject = `New Choudhary Code Labs Portfolio Message from ${name}`;
    sendSmtpEmail.htmlContent = `
        <h3>You've received a new message:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // Send the Email via API Call (HTTPS/Port 443)
    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Brevo API Error:', error);
        // Return a generic 500 error to the client
        res.status(500).json({ 
            success: false, 
            error: `Failed to send message. Please check server logs.` 
        });
    }
});

module.exports = router;
