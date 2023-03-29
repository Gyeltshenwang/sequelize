const express = require('express');

const {getAllUsers, postUser,getUserById, updateUser, postUserlogin}= require('../.././controllers/client/userController')
const clientRoutes = express.Router();


clientRoutes.get('/', getAllUsers)
clientRoutes.post('/api/v1/users', postUser);
clientRoutes.post('/api/v1/login', postUserlogin);


clientRoutes.get('/api/v1/users/:id', getUserById);
clientRoutes.patch('/api/v1/users/:id',updateUser )



module.exports = {
    clientRoutes
}