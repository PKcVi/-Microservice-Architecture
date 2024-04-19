const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: false },
  shippingAddress: { type: String, required: false },
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
