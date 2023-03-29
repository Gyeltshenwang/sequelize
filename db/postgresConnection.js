const { Sequelize } = require('sequelize')
require('dotenv').config()

// uri connection to postgres server

const sequelize = new Sequelize(process.env.DATA_BASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
    port: process.env.PORT
});



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