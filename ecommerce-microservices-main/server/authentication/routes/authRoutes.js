const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

// Routes
router.post('/client/signup', AuthController.signupClient);
router.post('/vendor/signup', AuthController.signupVendor);
router.post('/client/signin', AuthController.signinClient);
router.post('/vendor/signin', AuthController.signinVendor);
router.post('/vendor/getInfo', AuthController.getVendorInfo);
router.put('/vendor/updateInfo', AuthController.updateVendorInfo);
router.post('/client/getInfo', AuthController.getClientInfo);
router.put('/client/updateInfo', AuthController.updateClientInfo);

module.exports = router;
