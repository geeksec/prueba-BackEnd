import { Sequelize } from 'sequelize'
const { database } = require('./var');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: "mysql",
        port: database.port,
        timezone: 'America/Guayaquil',
        dialectOptions: {
            timezone: 'local',
        }
    }
);

export default sequelize