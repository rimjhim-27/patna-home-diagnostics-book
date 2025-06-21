const express = require('express');
const router = express.Router();
const { postToInstagram, postToLinkedIn } = require('../controllers/socialController');

router.post('/instagram/post', postToInstagram);
router.post('/linkedin/post', postToLinkedIn);

module.exports = router;