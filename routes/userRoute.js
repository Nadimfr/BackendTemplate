const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUser);
router.get('/user-details/:email', userController.getUserByEmail);
router.put('/:id/image_url', userController.uploadPP);
router.put('/:id', userController.updateUser);
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.post('/login', userController.login);
router.post('/resetPassword', userController.resetPassword);
router.post('/register', userController.register);
router.post('/sendVerification', userController.sendVerificationCode);
router.post('/delete', userController.deleteUser);

module.exports = router;
