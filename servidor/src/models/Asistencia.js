const db = require('../db');

const Asistencia = {};

Asistencia.get = async () => {
    return await db.query(`select * from asistencias`);
}

Asistencia.create = async (obj) => {

    return await db.query(`insert into asistencias set ?`, [obj]);
}

Asistencia.update = async (obj, idAsistencia) => {
    return await db.query(`update asistencias set ? where id=?`, [obj, idAsistencia]);
}

module.exports = Asistencia;
