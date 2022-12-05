const db = require('../db');

const Empleado = {};

Empleado.get = async () => {
    return await db.query(`select * from empleados`);
}

Empleado.create = async (obj) => {
    return await db.query(`insert into empleados set ?`, [obj]);
}

Empleado.findHoraSalida = async (idEmpleado) => {
    return await db.query(`select * from asistencias where empleado_id=? and hora_salida is null`, [idEmpleado]);
}


module.exports = Empleado;
