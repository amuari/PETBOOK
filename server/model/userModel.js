const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongooe = require('passport-local-mongoose')
const userSchema = new Schema()
userSchema.plugin(passportLocalMongooe)

module.exports = mongoose.model('User', userSchema)
