const db = require('../db');

const Empleado = {};

Empleado.get = async () => {
    return await db.query(`select * from empleados`);
}

module.exports = Empleado;
