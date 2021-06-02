import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import homeRoutes from './routes/index.route';

const app = express();
//MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//RUTAS DE LAS APIS
app.use('/api', homeRoutes);

export default app;