const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/tests', bookingController.getTests); // GET /api/booking/tests
router.post('/book', bookingController.createBooking); // POST /api/booking/book

module.exports = router;