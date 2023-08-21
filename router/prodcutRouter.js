const product = require('../controllers/productController');
const { route } = require('./userRouter');
const router = require('express').Router();

router.get('/product-list', product.getProduct);
router.post('/product-create', product.createProduct);
router.get('/product-info/:id', product.productInfo);
router.get('/product-info-by-name/:name', product.productInfoByName);
router.post('/update-product', product.updateProduct);
router.delete('/delete-product/:id', product.DeleteProduct);


module.exports = router;