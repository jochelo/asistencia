const express = require('express');
const EmpleadoController = require("../controllers/EmpleadoController");
const UsuarioController = require("../controllers/UsuarioController");
const routes = express.Router();

routes.get('/get-empleados', EmpleadoController.index);
routes.post('/store-empleado', EmpleadoController.store);

routes.post('/store-asistencia-empleado', EmpleadoController.storeAsistencia);

routes.post('/store-usuario', UsuarioController.store);

routes.post('/login', UsuarioController.login);

module.exports = routes;
