import { Router } from 'express'
const router = Router();

import jugador from '../controllers/jugador.controller'

router.post('/', jugador.crearJugador);
router.put('/:id', jugador.editarJugador);
router.delete('/:id', jugador.eliminarJugador);
router.post('/agregarjugador', jugador.agregarJugadorAlineacion);
router.put('/eliminarjugador/:id', jugador.eliminarJugadorAlineacion);

router.get('/lista/:posicion/:page/:limit', jugador.listarJugadores);

export default router;