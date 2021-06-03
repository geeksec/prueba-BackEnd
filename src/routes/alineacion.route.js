import { Router } from 'express'
const router = Router();

import alineacion from '../controllers/alineacion.controller'

router.post('/', alineacion.crearAlineacion); 
router.put('/:id', alineacion.editarAlineacion);
router.delete('/:id', alineacion.eliminarAlineacion);

export default router;