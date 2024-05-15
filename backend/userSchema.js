const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    given_name: String,
    family_name: String,
    nickname: String,
    name: String,
    picture: String,
    update_at: String,
    email: String,
    email_verified: Boolean,
    body: String
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel;