const orders = [
    {
        id: 1,
        customerId: 1,
        products: [
            {
                productId: 1,
                quantity: 1
            },
            {
                productId: 3,
                quantity: 2
            }
        ],
        total: 42000,
        status: 'pending'
    },
    {
        id: 2,
        customerId: 2,
        products: [
            {
                productId: 2,
                quantity: 2
            }
        ],
        total: 32000,
        status: 'completed'
    }
];

module.exports = orders;