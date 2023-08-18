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

const createProduct = async (req, res) => {
    try {
        let data = req.body;
        const newProduct = await product.create(data);
        if(newProduct) {
            res.status(200).send("Product added");
        }else {
            res.status(400).send("Product not added");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getProduct,
    createProduct
}