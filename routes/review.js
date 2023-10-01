const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/review');

router.post('/add-review',reviewController.addReview);
router.get('/get-reviews', reviewController.getReviews);
module.exports = router;