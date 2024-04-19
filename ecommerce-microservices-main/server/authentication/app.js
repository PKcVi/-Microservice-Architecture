// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Health Check
app.get('/health', async (req, res) => {
  try {
    res.status(200).send('Health is OK');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Routes
app.use('/auth', authRoutes);

// Server Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Authentication Microservice is running on port ${PORT}`);
});
