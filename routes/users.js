var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');


router.post('/login', userController.getUsers);//db connection test route
router.post('/register', userController.makeUser); // Removed authentication and authorization for sign-up
// router.get('/:id', userController.getUser);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;
