const Usuario = require("../models/Usuario");
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

module.exports =  UsuarioController;
