import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import sequelize from '../config/database';

const Alineacion = sequelize.define('alineacion', {
    id: {
        type: INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: STRING,
    },
    defensas: {
        type: INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: "Defensa tiene que ser un numero"
            },
            max: {
                args: 10,
                msg: "Defensa tiene que ser <= 10"
            },
        }
    },
    volantes: {
        type: INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: "Volante tiene que ser un numero"
            },
            max: {
                args: 10,
                msg: "Volante tiene que ser <= 10"
            },
        }
    },
    delanteros: {
        type: INTEGER,
        validate: {
            isInt: {
                args: true,
                msg: "Delanteros tiene que ser un numero"
            },
            max: {
                args: 10,
                msg: "Delanteros tiene que ser <= 10"
            },
        }
    },
    estado: {
        type: BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
});

export default Alineacion; 