
const express = require('express');

const sequelize = require('./db/postgresConnection')

const { clientRoutes } = require('./routes/client/getAllUser')
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use(clientRoutes)


// uri connection to postgres server



try  {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}




app.get('/', (req, res) => {
    res.send('welcome to postgrs')
    
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})

