const Empleado = require("../models/Empleado");
const Asistencia = require("../models/Asistencia");
const EmpleadoController = {};

EmpleadoController.index = async (req, res) => {
    const empleados = await Empleado.get();
    res.json(empleados);
}

EmpleadoController.store = async (req, res) => {
    const data = req.body;
    data.turno_id = 1;
    console.log("DATAAA", data);
    await Empleado.create(data);
    res.json({msg: 'empleado registrado exitosamente'});
}

EmpleadoController.storeAsistencia = async (req, res) => {
    const data = req.body;
    /**
     * preguntar si existe un registro en asistencias que no tenga hora_salida
     * si existe algun regitro, marcamos salida
     * si no, marcamos entrada
     *
     * */
    const existe = await Empleado.findHoraSalida(data.empleado_id);

    if (existe.length > 0) {
        const idAsistencia = existe[0].id;
        const obj = {
            hora_salida: data.date
        }
        await Asistencia.update(obj, idAsistencia);
    } else {
        const obj = {
            hora_entrada: data.date,
            hora_salida: null,
            licencia: false,
            empleado_id: data.empleado_id
        };
        await Asistencia.create(obj);
    }
    res.json({msg: 'asistencia marcada exitosamente'});
}

module.exports =  EmpleadoController;
