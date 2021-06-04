import Alineacion from '../models/Alineacion';
import Jugador from '../models/Jugador'
import sequelize from 'sequelize'
import { parse } from 'dotenv';

const crearJugador = async (req, res) => {
    const { nombre, numero, posicion } = req.body;
    try {
        const existejugador = await Jugador.count({
            where: {
                nombre: nombre
            }
        })
        if (existejugador > 0) {
            return res.status(205).json({
                message: 'ERROR: Ya existe un jugador con este nombre'
            })
        }
        let nuevoJugador = await Jugador.create({
            nombre,
            numero,
            posicion
        }, {
                fields: ['nombre', 'numero', 'posicion']
            });
        if (nuevoJugador) {
            res.status(200).json({
                message: 'SUCCESS: Jugador creado correctamente',
                data: nuevoJugador
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const editarJugador = async (req, res) => {
    const { nombre, numero, posicion } = req.body;
    const { id } = req.params;

    try {
        const existejugador = await Jugador.count({
            where: {
                id
            }
        })
        if (existejugador == 0) {
            return res.status(205).json({
                message: 'ERROR: No existe un jugador con este id'
            })
        }
        //ACTUALIZAMOS LA ALINEACION
        let updateJugador = await Jugador.update({
            nombre,
            numero,
            posicion
        }, { where: { id } });

        if (updateJugador) {
            res.status(200).json({
                message: 'SUCCESS: Jugador actualizado correctamente'
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const eliminarJugador = async (req, res) => {
    const { id } = req.params;
    try {
        const existejugador = await Jugador.count({
            where: {
                id
            }
        })
        if (existejugador == 0) {
            return res.status(205).json({
                message: 'ERROR: No existe un jugador con este id'
            })
        }
        const alineacion = await Jugador.destroy({
            where: { id }
        });
        res.json({
            message: 'SUCCESS: Jugador eliminado correctamente'
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
}

const agregarJugadorAlineacion = async (req, res) => {
    const { jugadorId, alineacionId } = req.body;
    try {
        //Buscamos jugador en la BD
        const existejugador = await Jugador.findOne({
            where: {
                id: jugadorId
            }
        })

        if (existejugador === null) {
            return res.status(205).json({
                message: 'ERROR: No existe un jugador con este id'
            })
        }
        //traemos el numero de jugadores por posicion en la alineacion
        const alineacion = await Alineacion.findOne({
            where: {
                id: alineacionId
            }
        })
        //traemos el numero de jugadores por posicion en la alineacion
        const posiciones = await Jugador.findAll({
            attributes: ['posicion', [sequelize.fn('count', sequelize.col('posicion')), 'count']],
            group: ['posicion'],
            order: [['posicion', 'ASC']],
            raw: true,
            where: {
                alineacionId
            }
        });
        let estado = true;
        console.log(existejugador.posicion, posiciones[2].count, alineacion.delanteros);
        if (existejugador.posicion === 'defensa' && posiciones[0].count <= alineacion.defensas) {
            estado = false;
        } else if (existejugador.posicion === 'volante' && posiciones[1].count <= alineacion.volantes) {
            estado = false;
        } else if (existejugador.posicion === 'delantero' && posiciones[2].count <= alineacion.delanteros) {
            estado = false;
        }
        if (estado) {
            return res.status(205).json({
                message: `ERROR: Alineacion de ${existejugador.posicion} esta completa`
            })
        }

        //validamos que el  jugador no este alineado
        if(existejugador.alineacionId !== null) {
            return res.status(205).json({
                message: 'ERROR: Jugador ya esta alineado'
            })
        }

        //validamos que sean 11 jugadores incluido el portero 
        const jugadores = await Jugador.count({
            where: {
                alineacionId: alineacionId
            }
        })
        if (jugadores >= 10) {
            return res.status(205).json({
                message: 'ERROR: Alineación completa'
            })
        }
        //ACTUALIZAMOS LA ALINEACION
        let updateJugador = await Jugador.update({
            alineacionId
        }, { where: { id: jugadorId } });

        if (updateJugador) {
            res.status(200).json({
                message: 'SUCCESS: Jugador actualizado correctamente'
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }
    

}

const eliminarJugadorAlineacion = async (req, res) => {
    const { id } = req.params;
    try {
        //Buscamos jugador en la BD
        const existejugador = await Jugador.findOne({
            where: {
                id
            }
        })

        if (existejugador === null) {
            return res.status(205).json({
                message: 'ERROR: No existe un jugador con este id'
            })
        }
        
        //ACTUALIZAMOS LA ALINEACION
        let updateJugador = await Jugador.update({
            alineacionId: null
        }, { where: { id } });

        if (updateJugador) {
            res.status(200).json({
                message: 'SUCCESS: Jugador actualizado correctamente'
            })
        }

    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }


}

const listarJugadores = async (req, res) => {

    const { posicion, page, limit } = req.params;
    const skip = limit * page - limit

    try {
        const count = await Jugador.count({
            where: {
                posicion
            }
        })

        const jugadores = await Jugador.findAll({
            where: {
                posicion
            },
            limit: parseInt(limit),
            offset: parseInt(skip)
        })

        return res.status(200).json({
            total: count,
            totalpagina: jugadores.length,
            data: jugadores
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
            data: {},
        })
    }

}


export default { 
    crearJugador, 
    editarJugador, 
    eliminarJugador, 
    agregarJugadorAlineacion,
    eliminarJugadorAlineacion,
    listarJugadores
}