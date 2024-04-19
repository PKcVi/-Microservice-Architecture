const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
//Not required
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
