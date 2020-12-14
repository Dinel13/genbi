const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email : {
        type : String,
        requireq : true
    },
    password : {
        type : String,
        requireq : true
    },
    name : {
        type : String,
        requireq : true
    },
    foto : {
        type : String,
        default : 'i am new'
    },
    articles : [{
        type : Schema.Types.ObjectId,
        ref : 'Articel'
    }]
})

module.exports = mongoose.model('User', userSchema)