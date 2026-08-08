const express = require('express');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger);

app.get('/api/hello', (req, res) => {
    res.status(200).json({
        message: 'Hello API'
    });
});

module.exports = app;