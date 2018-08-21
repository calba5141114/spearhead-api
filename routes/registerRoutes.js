const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const registerRoutes = express.Router();

registerRoutes.get('/',(req,res)=>{
    res.send({
        message: 'Use a post request',
    })
})


registerRoutes.post('/',(req,res)=>{
    const password = req.query.password;
    hashed = hash(password);
    console.log(hashed);
    res.send('password sent')
})

module.exports = registerRoutes;