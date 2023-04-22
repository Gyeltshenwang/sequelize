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
const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = sequelize;