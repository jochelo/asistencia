const express = require('express');
const EmpleadoController = require("../controllers/EmpleadoController");
const routes = express.Router();

routes.get('/get-empleados', EmpleadoController.index);

module.exports = routes;
