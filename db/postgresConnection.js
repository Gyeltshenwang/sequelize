const { Sequelize } = require('sequelize')
require('dotenv').config()

// uri connection to postgres server



let sequelize;
if (process.env.NODE_ENV === "production") {
    sequelize = new Sequelize(process.env.DATA_URL);
} else {
    sequelize = new Sequelize(
        process.env.DATA_BASE || 'user',
        process.env.USER ||'postgres',
        process.env.PASSWORD ||'Khotsha',
        {
        host: process.env.HOST|| 'localhost',
        dialect: process.env.DILECT ||'postgres',
        port: process.env.PORT|| 5432,

        },
    );
}
const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
module.exports = sequelize;