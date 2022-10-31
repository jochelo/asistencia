const Empleado = require("../models/Empleado");
const EmpleadoController = {};

EmpleadoController.index = async (req, res) => {
    const empleados = await Empleado.get();
    res.json(empleados);
}

module.exports =  EmpleadoController;
