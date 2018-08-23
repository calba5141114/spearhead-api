const express = require('express');
const basicRoutes = express.Router();
const savePost = require('../controllers/post');

basicRoutes.get('/post', (req, res) => {
    res.send({
        message: "This is the GET request response from /post"
    })
});

basicRoutes.post('/post', (req, res) => {
    savePost(req);
    res.send({
        message: 'POST REQ SENT'
    })
});


module.exports = basicRoutes;
