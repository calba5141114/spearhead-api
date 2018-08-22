const bcrypt = require('bcryptjs');
const user = require('../models/user');


function saveNewUser(req) {

    let password = req.query.password;
    let hashedPassword;
    let name = req.query.name;
    let email = req.query.email;
    let bio = req.query.email;
    let track = req.query.track;
    let interests = req.query.interests;
    let portfolio = req.query.portfolio;
    let phone = req.query.phone;
    let social = req.query.social;
    let room = req.query.room;
    let hometown = req.query.hometown
    let photo = req.query.photo;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.send({
                message: err,
            });
        }
        hashedPassword = hash
    });

    var User= new user({
        Name: name,
        Email: email,
        Bio: bio,
        Track: track,
        Interests: interests,
        Portfolio: portfolio,
        Phone: phone,
        Social: social,
        Room: room,
        Hometown: hometown,
        Photo: photo,
        Password: hashedPassword,
    });
    
    User.save(function (err) {
        if(err) {
            console.error(err);
        };
        console.log('sent');
    })
}
    module.exports = saveNewUser;

