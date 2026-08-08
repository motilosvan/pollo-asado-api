const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello API'
    });
});

module.exports = app;
