const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

router.get('/', recommendationController.getRecommendation);
router.get('/:emotionalType', recommendationController.getRecommendationByType);

module.exports = router;
