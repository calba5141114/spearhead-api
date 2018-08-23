const express = require('express');
const basicRoutes = express.Router();

basicRoutes.get('/post', (req, res) => {
    res.send({
        message: "This is the GET request response from /post"
    })
});

basicRoutes.post('/post', (req, res) => {
    res.send({
        message: 'POST REQ SENT'
    })
});


module.exports = basicRoutes;
