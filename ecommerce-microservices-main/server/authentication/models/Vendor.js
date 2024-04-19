const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  shopName: { type: String, required: true },
  shopCountry: { type: String, required: true },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
