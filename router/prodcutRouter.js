const product = require('../controllers/productController');
const roter = require('express').Router();

roter.get('/product-list', product.getProduct);
roter.post('/product-create', product.createProduct);


module.exports = roter;