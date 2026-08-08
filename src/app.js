const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const logger = require('./middleware/logger');

const productsRoutes = require('./routes/products.routes');
const customersRoutes = require('./routes/customers.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

const swaggerDocument = YAML.load('./openapi.yaml');

app.use(express.json());
app.use(logger);

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        message: 'Hello API'
    });
});

app.use('/api/products', productsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/orders', ordersRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;