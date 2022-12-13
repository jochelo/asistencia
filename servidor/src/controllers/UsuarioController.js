const Usuario = require("../models/Usuario");
const jwt = require('jsonwebtoken');
const UsuarioController = {};

UsuarioController.index = async (req, res) => {
    const usuarios = await Usuario.get();
    res.status(200).send(usuarios);
}

UsuarioController.store = async (req, res) => {
    const data = req.body;
    await Usuario.create(data);
    res.json({msg: 'usuario registrado exitosamente'});
}

UsuarioController.login = async (req, res) => {
    const data = req.body;
    //verificar las credenciales
    const result = await Usuario.singin(data);
    if (result.length > 0) {
        const dataEncrypt = {
            data: result[0]
        }

        jwt.sign(dataEncrypt, 'secret', {expiresIn: '12h'}, (err, token) => {
            if(!err) {
                res.status(200).json({
                    usuario: result[0],
                    token
                });
            }
        })
    } else {
        res.status(401).json({msg: 'Credenciales incorrectas'});
    }

}

module.exports =  UsuarioController;
