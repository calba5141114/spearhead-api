const mongoose = require('mongoose');

const userSchema = mongoose.schema ({
    name:{
        type: String,
        required: [true, "The name field is required"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "The Email field is required"],
        unique: true
    },
    bio:{
        type: String,
        required: [true, "The Bio field is required"],
    },

    track: String,

    interests: String,

    portfolio: String,

    phone: String,

    social: String,

    room: String,

    hometown: String,

    photo: Image


});
const user =mongoose.model('user',userSchema);

module.exports = user;