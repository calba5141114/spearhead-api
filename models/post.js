const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, "You need a title"],
        max:[30,"Sorry your title can only be 30 characters"]
    },
    text: {
        type: String,
        required: [true, "Text field required"],
        max: [250, "The maximum number of characters is 250 characters"]
    }
});

const post = mongoose.model('post',postSchema);

module.exports = post;
