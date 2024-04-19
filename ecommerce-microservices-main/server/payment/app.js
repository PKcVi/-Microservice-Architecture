// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const paymentRoutes = require('./routes/paymentRoutes');
const paypal = require('paypal-rest-sdk');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configure PayPal with your sandbox credentials
paypal.configure({
  mode: 'sandbox',
  client_id: 'AaG0FEuCziHPWTP7EvjPjGIu_UtMtPZq5vX8nUhFEIMe5jtDX-K88kj8t0w9tQwSnCOZs-TbIRZFHSeO',
  client_secret: 'EFC7IXriNL0c7IxIWsiJjSbW7ADk3e0X_B2Qf4SeJlqiI9OFM8Bb5guF6W-IEOTRsaiK1Iq4qw3fziIp',
});

//Health Check
app.get('/health', async (req, res) => {
  try {
    res.status(200).send('Health is OK');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Routes
app.use('/api/payment', paymentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server Start
const PORT = process.env.PORT || 3004;  
app.listen(PORT, () => {
  console.log(`Payment Microservice is running on port ${PORT}`);
});
