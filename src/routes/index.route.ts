import { Router } from 'express'
import config from '../config/vars'
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: `PRUEBA BACKEND | GEEKS - API ${config.VERSION}`
    });
})

export default router;