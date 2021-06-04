import Accion from '../models/Accion'

const crearAccion = async (req, res) => {
    const { nombre, minuto, alineacionId } = req.body;
    try {
        
        const existeaccion = await Accion.count({
            where: {
                nombre
            }
        })
        if (existeaccion > 0) {
            return res.status(205).json({
                message: 'ERROR: Ya existe una accion con este nombre'
            })
        }
        const accion = await Accion.create({
            nombre,
            minuto, 
            alineacionId
        }, {
                fields: ['nombre', 'minuto', 'alineacionId']
            });

        if (accion) {
            res.status(200).json({
                message: 'SUCCESS: Accion creada correctamente',
                data: accion
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const eliminarAccion = async (req, res) => {
    const { id } = req.params;
    try {
        const existeaccion = await Accion.count({
            where: {
                id
            }
        })
        if (existeaccion == 0) {
            return res.status(205).json({
                message: 'ERROR: No existe una accion con este id'
            })
        }
        const accion = await Accion.destroy({
            where: { id }
        });

        res.json({
            message: 'SUCCESS: Accion eliminada correctamente'
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}
export default { crearAccion, eliminarAccion }