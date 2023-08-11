const users = require('../controllers/userController');
const roter = require('express').Router();

roter.get('/get-info', users.userInfo);
roter.post('/create-user', users.creatUser);
roter.get('/get-user', users.getUser);

module.exports = roter;