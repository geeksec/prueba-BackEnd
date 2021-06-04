import Alineacion from '../models/Alineacion'
import Jugador from '../models/Jugador';
import Accion from '../models/Accion';

const crearAlineacion = async (req, res) => {
    const { nombre, defensas, volantes, delanteros } = req.body;
    try {
        const alineacion = defensas + volantes + delanteros;
        if(alineacion > 10) {
            return res.status(205).json({
                message: 'ERROR: La alineacion no debe superar los 11 jugadores incluido el portero',
            })
        } else if (alineacion < 10) {
            return res.status(205).json({
                message: 'ERROR: La alineacion debe tener 11 jugadores incluido el portero'
            })
        }
        const existealineacion = await Alineacion.count({
            where: {
                nombre: nombre
            }
        })
        if(existealineacion > 0) {
            return res.status(205).json({
                message: 'ERROR: Ya existe una alineación con este nombre'
            })
        }
        let nuevaAlineacion = await Alineacion.create({
            nombre,
            defensas,
            volantes,
            delanteros
        }, {
                fields: ['nombre', 'defensas', 'volantes', 'delanteros']
            });
        if (nuevaAlineacion) {
            res.status(200).json({
                message: 'SUCCESS: Alineación creada correctamente',
                data: nuevaAlineacion
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const editarAlineacion = async (req, res) => {
    const { nombre, defensas, volantes, delanteros } = req.body;
    const { id } = req.params;

    try {
        const alineacion = defensas + volantes + delanteros;
        if(alineacion > 10) {
            return res.status(205).json({
                message: 'ERROR: La alineacion no debe superar los 11 jugadores incluido el portero'
            })
        } else if (alineacion < 10) {
            return res.status(205).json({
                message: 'ERROR: La alineacion debe tener 11 jugadores incluido el portero'
            })
        }
        const existealineacionnombre = await Alineacion.count({
            where: {
                nombre: nombre
            }
        })
        if (existealineacionnombre > 0) {
            return res.status(205).json({
                message: 'ERROR: Ya existe una alineación con este nombre'
            })
        }
        const existealineacion = await Alineacion.count({
            where: {
                id
            }
        })
        if(existealineacion == 0) {
            return res.status(205).json({
                message: 'ERROR: No existe una alineación con este id'
            })
        }
        //ACTUALIZAMOS LA ALINEACION
        let updateAlineacion = await Alineacion.update({
            nombre,
            defensas,
            volantes,
            delanteros
        }, { where: { id } });

        if (updateAlineacion) {
            res.status(200).json({
                message: 'SUCCESS: Alineación actualizada correctamente'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const eliminarAlineacion = async (req, res) => {
    const { id } = req.params;
    try {
        const existealineacion = await Alineacion.count({
            where: {
                id
            }
        })
        if(existealineacion == 0) {
            return res.status(205).json({
                message: 'ERROR: No existe una alineación con este id'
            })
        }
        const alineacion = await Alineacion.destroy({
            where: { id }
        });
        console.log(alineacion)
        res.json({
            message: 'SUCCESS: Alineación eliminada correctamente'
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const listarAlineaciones = async (req, res) => {

    const { id } = req.params;

    try {
        const alineacion = await Alineacion.findAll({
            where: {
                id
            },
            include: [Jugador, Accion]
        })

        return res.status(200).json({
            data: alineacion
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }

}


export default { crearAlineacion, editarAlineacion, eliminarAlineacion, listarAlineaciones }