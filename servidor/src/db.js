const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
      console.error('ERROR DE CONECCION');
    } else {
        connection.release();
    }
    console.log('conectado a la DB');
});

pool.query = promisify(pool.query)

module.exports = pool;
