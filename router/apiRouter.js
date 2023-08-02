const router = require('express').Router();
const users = require('../controllers/usersController.js');

router.post('/user-login', users.userLogin);

module.exports = router;