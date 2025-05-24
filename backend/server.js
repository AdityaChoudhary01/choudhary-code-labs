const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'https://adityachportfolio3.netlify.app' })); // Replace with your Netlify URL
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact', require('./routes/contact'));

app.get('/', (req, res) => res.send('Portfolio API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
