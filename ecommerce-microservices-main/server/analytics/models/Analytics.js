const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, unique: true },
  categories: {
    mensFashion: { type: Number, default: 0 },
    womensFashion: { type: Number, default: 0 },
    bagsAndAccessories: { type: Number, default: 0 },
    babyCare: { type: Number, default: 0 },
    healthCareAndBeauty: { type: Number, default: 0 },
    electronicAccessories: { type: Number, default: 0 },
    homeAndLifestyle: { type: Number, default: 0 },
    artAndCrafts: { type: Number, default: 0 },
  },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
