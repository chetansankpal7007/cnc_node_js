const product = require('../controllers/productController');
const roter = require('express').Router();

roter.get('/product-list', product.getProduct);


module.exports = roter;