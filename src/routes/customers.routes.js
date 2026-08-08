const express = require('express');
const customers = require('../data/customers');

const router = express.Router();

// GET all customers
router.get('/', (req, res) => {
    res.status(200).json(customers);
});

// GET customer by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const customer = customers.find(customer => customer.id === id);

    if (!customer) {
        return res.status(404).json({
            message: 'Customer not found'
        });
    }

    res.status(200).json(customer);
});

// POST create customer
router.post('/', (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            message: 'Name, email and phone are required'
        });
    }

    const newCustomer = {
        id: customers.length > 0
            ? customers[customers.length - 1].id + 1
            : 1,
        name,
        email,
        phone
    };

    customers.push(newCustomer);

    res.status(201).json(newCustomer);
});

// PUT update customer
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, phone } = req.body;

    const customer = customers.find(customer => customer.id === id);

    if (!customer) {
        return res.status(404).json({
            message: 'Customer not found'
        });
    }

    if (!name || !email || !phone) {
        return res.status(400).json({
            message: 'Name, email and phone are required'
        });
    }

    customer.name = name;
    customer.email = email;
    customer.phone = phone;

    res.status(200).json(customer);
});

// DELETE customer
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const customerIndex = customers.findIndex(
        customer => customer.id === id
    );

    if (customerIndex === -1) {
        return res.status(404).json({
            message: 'Customer not found'
        });
    }

    const deletedCustomer = customers.splice(customerIndex, 1);

    res.status(200).json({
        message: 'Customer deleted successfully',
        customer: deletedCustomer[0]
    });
});

module.exports = router;