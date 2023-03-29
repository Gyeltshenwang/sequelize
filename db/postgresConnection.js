const { Sequelize } = require('sequelize')

// uri connection to postgres server

const sequelize = new Sequelize('user', 'postgres', 'Khotsha', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});
module.exports= sequelize;