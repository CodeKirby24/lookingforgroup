const mongoose = require('mongoose')

var postSchema = mongoose.Schema({
    username: String,
    game: String,
    description: String,
    date: Date
})

const postModel = mongoose.model('userData', postSchema);

module.exports = postModel;