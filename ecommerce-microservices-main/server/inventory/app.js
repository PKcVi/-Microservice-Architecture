const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer'); // Import multer
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up multer storage
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/inventory', inventoryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Health Check
app.get('/health', async (req, res) => {
  try {
    res.status(200).send('Health is OK');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Server Start
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Inventory Microservice is running on port ${PORT}`);
});
