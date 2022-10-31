const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hola mundo desde express');
})

module.exports = routes;
