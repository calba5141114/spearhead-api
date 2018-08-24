const post = require('../models/post');

function savePost(req) {

    let title = req.query.title;
    let text = req.query.text;

    let PostOriginal = new post({
        title: title,
        text: text,
    })

    PostOriginal.save((err, post) => {
        if (err) return console.log(err);
        console.log('Post Shipped');
    });
}

module.exports = savePost;