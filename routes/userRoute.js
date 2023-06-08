const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/sendVerification', userController.sendVerificationCode);
router.post('/delete', userController.deleteUser);

module.exports = router;
