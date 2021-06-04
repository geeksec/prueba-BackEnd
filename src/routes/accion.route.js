import { Router } from 'express'
const router = Router();

import accion from '../controllers/accion.controller'

router.post('/', accion.crearAccion);
router.delete('/:id', accion.eliminarAccion);

export default router;