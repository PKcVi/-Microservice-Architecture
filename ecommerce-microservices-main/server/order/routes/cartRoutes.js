const express = require('express');
const CartController = require('../controllers/CartController');

const router = express.Router();

router.post('/addToCart', CartController.addToCart);
router.post('/getItemCount', CartController.getItemCount);
router.post('/getAllItems', CartController.getAllItems); 
router.post('/deleteItem', CartController.removeItem); 

module.exports = router;
