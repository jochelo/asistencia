const db = require('../db');
const {encriptar} = require('../helpers/encrypt');
const Usuario = {};

Usuario.get = async () => {
    return await db.query(`select * from usuarios`);
}

Usuario.create = async (obj) => {

    obj.password = encriptar(obj.password); // funcion encargada de encriptar la contraseña
    return await db.query(`insert into usuarios set ?`, [obj]);
}


module.exports = Usuario;
