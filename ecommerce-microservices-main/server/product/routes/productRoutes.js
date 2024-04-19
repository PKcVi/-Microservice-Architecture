const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.post('/addItem', ProductController.addItem);
router.post('/fetch', ProductController.getAllItems);
router.post('/fetchmanage', ProductController.getAllItemsManagable);
router.post('/fetchSelection', ProductController.getAllItems);
router.post('/getProductDetailsById', ProductController.getProductDetailsById);
router.put('/updateProduct', ProductController.updateItem);
router.delete('/deleteItem', ProductController.deleteItem);
router.put('/decreaseQuantity', ProductController.decreaseQuantity);
router.post('/getCategory', ProductController.getCategory);

module.exports = router;
