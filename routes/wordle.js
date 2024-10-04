var express = require('express');
var router = express.Router();
var wordleController = require('../controllers/wordleController');

// Route to get a random 5-letter word
router.get('/random-word', wordleController.getRandomWord);

// Route to validate a word
router.post('/validate-word', wordleController.validateWord);

module.exports = router;