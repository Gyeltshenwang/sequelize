const sequelize = require('../db/postgresConnection')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true,
        
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentID: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
User.sync();
console.log("The table for the User model was just (re)created!");

module.exports = User
// `sequelize.define` also returns the model
