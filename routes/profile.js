var express = require('express');
var router = express.Router();
const authController = require('../controllers/authentication');

router.get('/authentication/profile', authController.pullProfile);

module.exports = router;