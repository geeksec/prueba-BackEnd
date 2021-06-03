import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import sequelize from '../database/database';

const Jugador = sequelize.define('jugador', {
    id: {
        type: INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: STRING
    },
    numero: {
        type: INTEGER
    },
    posicion: {
        type: STRING
    },
    status: {
        type: BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
});

export default Jugador; 