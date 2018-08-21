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
        
    },
    bio:{
        type: String,
        required: [true, "The Bio field is required"],
    },
    track:{
        type: String,
    },
    interests:{
        type: String,
    },
    portfolio:{
        type: String,
    },
    phone:{
        type: String,
    },
    social:{
        type:String,
    },
    room:{
        type: String,
    },
    hometown:{
        type: String,
    },
    photo:{
        type: ImageData
    }


});