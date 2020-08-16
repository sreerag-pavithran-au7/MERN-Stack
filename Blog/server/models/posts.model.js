const mongoose = require('mongoose');

let postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }

});

let Post = mongoose.model('Post', postSchema);
module.exports = Post;