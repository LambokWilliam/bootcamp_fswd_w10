const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController.js');

router.get('/users', UsersController.findUsers);
router.get('/users/:id', UsersController.findUserById);
router.post('/users', UsersController.createUser);
router.put('/users/:id', UsersController.updateUser);
router.delete('/users/:id', UsersController.deleteUser);

module.exports = router;
