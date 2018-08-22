const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const registerRoutes = express.Router();
const saveNewUser = require('../controllers/register')

registerRoutes.get('/register',(req,res)=>{
    res.send({
        message: 'Use a post request',
    })
})


registerRoutes.post('/register',(req,res)=>{
    saveNewUser(req);
    res.send('password sent')
})

module.exports = registerRoutes;