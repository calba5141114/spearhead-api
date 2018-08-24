const bcrypt = require('bcryptjs');
const user = require('../models/user');

function saveNewUser(req) {

    let hashedPassword = bcrypt.hashSync(req.query.password, 8);

    var User = new user({
        password: hashedPassword,
        name: req.query.name,
        email: req.query.email,
        bio: req.query.email,
        track: req.query.track,
        interests: req.query.interests,
        portfolio: req.query.portfolio,
        phone: req.query.phone,
        social: req.query.social,
        room: req.query.room,
        hometown: req.query.hometown,
        photo: req.query.photo,
    });

    User.save((err, User) => {
        if (err) return console.log(err);
        console.log(User + '\n Successfully saved');
    });
}
module.exports = saveNewUser;

