const express = require('express');
const registerRoutes = express.Router();
const saveNewUser = require('../controllers/register')

registerRoutes.get('/register', (req, res) => {
    res.send({
        message: 'Post request order name, email, password, bio, track, interest, portfolio, phone, social, room, hometown, photo',
    })
})

//saves user profiles
registerRoutes.post('/register', (req, res) => {
    saveNewUser(req);
    res.send('profile sent')
})

module.exports = registerRoutes;
