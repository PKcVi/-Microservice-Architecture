// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/analytics', analyticsRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//Health Check
app.get('/health', async (req, res) => {
  try {
    res.status(200).send('Health is OK');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});


// Server Start
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Analytics Microservice is running on port ${PORT}`);
});
