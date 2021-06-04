import express from 'express'
import morgan from 'morgan'
import { port }  from './config/var'
import sequelize from './config/database'

const app = express();

// Import routes
import indexRoute from './routes/index.route';
import alineacionRoute from './routes/alineacion.route';
import jugadorRoute from './routes/jugador.route';
import accionRoute from './routes/accion.route';

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', indexRoute);
app.use('/api/alineacion', alineacionRoute);
app.use('/api/jugador', jugadorRoute);
app.use('/api/accion', accionRoute)

app.listen(port, () => {
    console.log(`INFO: Server in running on port ${port}`)

    //Verificamos la conexion a la base de dato
    sequelize.sync({ force: false }).then(() => {
        console.log("SUCCESS: Conectados a la base de datos");
    }).catch(error => {
        console.log('ERROR: Se ha producido un error', error);
    })
})