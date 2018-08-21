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
     let  password = req.query.password;
     let hashedPassword;


    bCrypt.hash(password, 10, (err,hash) => {
        if(err){
            res.send({
            message: err,
            });
        }
        hashedPassword =  hash
    });

    res.send('password sent')
})

module.exports = registerRoutes;