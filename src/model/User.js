const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength:4,
        maxLength:20,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength:6,
    },
    admin:{
        type: Boolean,
        default: false,
    }
},{timestamps: true}
)

module.exports = mongoose.model('User', userSchema)