const { Sequelize } = require('sequelize')
require('dotenv').config()

// uri connection to postgres server

const sequelize = new Sequelize(process.env.DATA_BASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    port: process.env.PORT,
    pool: {
        min: 0,
        max: 7,
        acquireTimeoutMillis: 300000,
        createTimeoutMillis: 300000,
        destroyTimeoutMillis: 50000,
        idleTimeoutMillis: 300000,
        reapIntervalMillis: 10000,
        createRetryIntervalMillis: 2000,
        propagateCreateError: false,
    },
    acquireConnectionTimeout: 60000,
});
// try  {
//      sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }


// let sequelize;
// if (process.env.NODE_ENV === "production") {
//     sequelize = new Sequelize(process.env.DATABASE_URL);
// } else {
//     sequelize = new Sequelize(
//         process.env.POSTGRES_DB || "elitypescript",
//         process.env.POSTGRES_USER || "eli",
//         "",
//         {
//             host: process.env.PSQL_HOST || "localhost",
//             dialect: "postgres",
//             pool: {
//                 max: 100,
//                 min: 0,
//                 idle: 200000,
//                 // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
//                 acquire: 1000000,
//             },
//         }
//     );
// }
            module.exports = sequelize;