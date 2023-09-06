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
            let resJson = {msg: "Product added"}
            res.status(200).send(resJson);
        }else {            
            let resJson = {msg: "Product not added"}
            res.status(400).send(resJson);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const productInfo = async (req, res) => {
    const reqData = req.params;
    try {
        const pro = await product.findById(reqData.id);
        if(pro) {
            res.status(200).send(pro);
        } else {
            res.status(200).send("Product not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }    
}

const productInfoByName = async (req, res) => {
    const reqData = req.params;
    try {
        console.log("reqData.name", reqData.name);
        const pro = await product.find({name: reqData.name});
        if(pro) {
            res.status(200).send(pro);
        } else {
            res.status(200).send("Product not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }    
}

const updateProduct = async (req, res) => {
    try {
        let data = req.body;
        console.log(data);
        const isupdate = await product.findByIdAndUpdate(data._id, data);
        if(isupdate) {
            res.status(200).send("Product updated");
        }else {
            res.status(400).send("Product not updated");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const DeleteProduct = async (req, res) => {
    const reqData = req.params;
    try {
        const isdelete = await product.findByIdAndDelete(reqData.id);
        if(isdelete) {
            res.status(200).send("Product Deleted");
        } else {
            res.status(200).send("Product not Deleted");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }    
}

module.exports = {
    getProduct,
    createProduct,
    productInfo,
    productInfoByName,
    updateProduct,
    DeleteProduct
}