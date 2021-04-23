const path = require('path');

const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/add-user', usersController.getAddUser);
router.post('/add-user', usersController.postAddUser);
router.get('/user', usersController.getUsers);

module.exports = router;
