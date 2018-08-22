const express = require('express');
const registerRoutes = express.Router();
const saveNewUser = require('../controllers/register')

registerRoutes.get('/register',(req,res)=>{
    res.send({
        message: 'Use a post request',
    })
})

//saves user profiles
registerRoutes.post('/register',(req,res)=>{
    saveNewUser(req);
    res.send('profile sent')
})

module.exports = registerRoutes;