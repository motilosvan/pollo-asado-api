const express = require('express');
const orders = require('../data/orders');

const router = express.Router();

// GET all orders
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// GET order by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const order = orders.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({
            message: 'Order not found'
        });
    }

    res.status(200).json(order);
});

// POST create order
router.post('/', (req, res) => {
    const { customerId, products, total, status } = req.body;

    if (
        customerId === undefined ||
        !products ||
        total === undefined ||
        !status
    ) {
        return res.status(400).json({
            message: 'customerId, products, total and status are required'
        });
    }

    const newOrder = {
        id: orders.length > 0
            ? orders[orders.length - 1].id + 1
            : 1,
        customerId,
        products,
        total,
        status
    };

    orders.push(newOrder);

    res.status(201).json(newOrder);
});

// PUT update order
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { customerId, products, total, status } = req.body;

    const order = orders.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({
            message: 'Order not found'
        });
    }

    if (
        customerId === undefined ||
        !products ||
        total === undefined ||
        !status
    ) {
        return res.status(400).json({
            message: 'customerId, products, total and status are required'
        });
    }

    order.customerId = customerId;
    order.products = products;
    order.total = total;
    order.status = status;

    res.status(200).json(order);
});

// DELETE order
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const orderIndex = orders.findIndex(order => order.id === id);

    if (orderIndex === -1) {
        return res.status(404).json({
            message: 'Order not found'
        });
    }

    const deletedOrder = orders.splice(orderIndex, 1);

    res.status(200).json({
        message: 'Order deleted successfully',
        order: deletedOrder[0]
    });
});

module.exports = router;