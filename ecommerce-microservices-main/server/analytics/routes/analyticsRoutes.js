const express = require('express');
const AnalyticsController = require('../controllers/AnalyticsController');

const router = express.Router();

router.post('/fetchRecommended', AnalyticsController.getAllRecommended);

module.exports = router;
