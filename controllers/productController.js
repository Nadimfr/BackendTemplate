const Product = require('../models/Product');

const updateProduct = async (request, response) => {
    try {
        console.log(request.body);
        const prod = await Product.findByIdAndUpdate(request.params.id, {
            $set: request.body
        });
        return response.status(200).json(prod);
    } catch (error) {
        return response.status(500).json(error);
    }
};

const createProduct = (request, response) => {
    Product.create(request.body)
        .then((prod) => {
            return response.status(200).json(prod);
        })
        .catch((error) => {
            return response.status(500).json(error);
        })
};

const getProduct = (request, response) => {
    Product.findById(request.params.id)
        .then((prod) => {
            return response.status(200).json(prod);
        })
        .catch((error) => {
            return response.status(500).json(error);
        })
};

const getProducts = (request, response) => {
    Product.find({})
        .then((prod) => {
            console.log(prod);
            return response.status(200).json(prod);
        })
        .catch((error) => {
            return response.status(500).json(error);
        })
};

module.exports = {
    updateProduct,
    createProduct,
    getProduct,
    getProducts,
}
