var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


router.post('/login', userController.getUsers);//
router.post('/register', userController.makeUser); // Removed authentication and authorization for sign-up

module.exports = router;
