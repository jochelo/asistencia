const express = require('express');
const EmpleadoController = require("../controllers/EmpleadoController");
const routes = express.Router();

routes.get('/get-empleados', EmpleadoController.index);
routes.post('/store-empleado', EmpleadoController.store);

routes.post('/store-asistencia-empleado', EmpleadoController.storeAsistencia);

module.exports = routes;
