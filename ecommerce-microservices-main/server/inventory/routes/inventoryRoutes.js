const express = require('express');
const InventoryController = require('../controllers/InventoryController');

const router = express.Router();

router.put('/updateProduct', InventoryController.updateProduct);

module.exports = router;
