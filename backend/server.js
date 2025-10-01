const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import the new contact router
const contactRouter = require('./routes/contact');

const app = express();

// --- Database Connection ---
const connectDB = async () => {
    try {
        // FIX: Removed deprecated mongoose options
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

// --- Middleware & Routes ---
app.use(cors({
    origin: 'https://choudharycodelabs.netlify.app', 
    methods: ['POST', 'GET'],
}));
app.use(express.json());

// Main server status route
app.get('/', (req, res) => {
    res.status(200).send('Backend is running!');
});

// Use the separate contact router for the /api/contact endpoint
app.use('/api/contact', contactRouter);


// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
