const express = require('express');
const products = require('../data/products');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(products);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.status(200).json(product);
});

router.post('/', (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({
            message: 'Name and price are required'
        });
    }

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name,
        price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    if (!name || price === undefined) {
        return res.status(400).json({
            message: 'Name and price are required'
        });
    }

    product.name = name;
    product.price = price;

    res.status(200).json(product);

    
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const productIndex = products.findIndex(product => product.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({
        message: 'Product deleted successfully',
        product: deletedProduct[0]
    });
});
module.exports = router;