const mongoose = require('mongoose');
const product = require('../models/productModel');

const getProduct = async (req, res) => {
    try {
        const productList = await product.find({});
        res.status(200).json(productList);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getProduct
}