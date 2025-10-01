const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors({
  origin: 'https://choudharycodelabs.netlify.app', // Explicit origin for security
  methods: ['POST'],
}));
app.use(express.json());

// --- API Route for Contact Form ---
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  // --- Nodemailer Transporter Setup ---
  const transporter = nodemailer.createTransport({
   service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000, // 10s timeout
    tls: {
      rejectUnauthorized: false, // Avoid TLS handshake issues
    },
  });

  // --- Verify SMTP Connection ---
  try {
    await transporter.verify();
    console.log('SMTP server is ready to send messages');
  } catch (verifyError) {
    console.error('SMTP verification failed:', verifyError);
    return res.status(500).json({ success: false, error: 'SMTP server not reachable.' });
  }

  // --- Mail Options ---
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

  // --- Send Email ---
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
