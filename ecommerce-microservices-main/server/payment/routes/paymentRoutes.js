const express = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = express.Router();

router.post('/create-payment', PaymentController.createPayment);
router.post('/execute-payment', PaymentController.executePayment);


module.exports = router;
