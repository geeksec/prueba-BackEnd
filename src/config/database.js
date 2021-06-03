import { Sequelize } from 'sequelize'
const { database } = require('./var');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql"
    }
);

export default sequelize