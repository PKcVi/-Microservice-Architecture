// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Multer Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); 

// Routes with Multer middleware
app.use('/products', upload.array('images', 5), productRoutes);

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
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Product Microservice is running on port ${PORT}`);
});
