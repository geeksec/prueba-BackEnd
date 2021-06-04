import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import sequelize from '../config/database';

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
        type: INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: "Numero tiene que ser un numero"
            }
        }
    },
    posicion: {
        type: STRING
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

export default Jugador; 