const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser())

const secrete = 'kldfjlsdjflsdjf';
const codes ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3llbHRzaGUiLCJwYXNzd29yZCI6Imtob3RzaGEiLCJpYXQiOjE2NzkzNzE5OTN9.vmOz5zougTYhRkLB0MHfBOWdmF1V76uaWH88Y6MMmpI'

const payload = {
    "name": "gyeltshe",
    "password":"khotsha"
}

const token = jwt.sign(payload, secrete);


console.log(token)

const verification = jwt.verify(codes, secrete, (error, decode) => {
    if (error) {
        console.log('invalid toker')
    }
    else {
        console.log(decode.name)
        console.log(decode)
    }
});


app.get('/', (req, res) => {
    res.send('hellow for cookies')
    console.log(req.cookies)
})
app.listen(3000, () => {
    console.log('listening in ponr 3000')
})