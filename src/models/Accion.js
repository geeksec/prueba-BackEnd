import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import sequelize from '../config/database';

const Accion = sequelize.define('accion', {
    id: {
        type: INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: STRING
    },
    minuto: {
        type: INTEGER
    },
    alineacionId: {
        type: INTEGER
    },
    status: {
        type: BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
});

export default Accion;
