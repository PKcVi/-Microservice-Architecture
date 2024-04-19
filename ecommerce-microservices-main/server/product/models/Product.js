const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categories: [{ type: String, required: true }],
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  images: [
    {
      url: { type: String, required: true },
    },
  ],
  userEmail: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
