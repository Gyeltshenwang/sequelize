
const express = require('express');



const { clientRoutes } = require('./routes/client/getAllUser')
const cookieParser = require('cookie-parser')

const app = express();

app.use(express.json())
app.use(cookieParser());

app.use(clientRoutes)


// uri connection to postgres server











app.listen(3000, () => {
    console.log('listening on port 3000');
})

