
const express = require('express');



const { clientRoutes } = require('./routes/client/getAllUser')
const cookieParser = require('cookie-parser')

const app = express();
const PORT = process.env.PROTS || 3000
app.use(express.json())
app.use(cookieParser());

app.use(clientRoutes)


app.listen(PORT, () => {
    console.log(`listening on port 3000 ${process.env.NODE_ENV}`);
})

