const mongoose = require('mongoose');
const Schema = mongoose.Schema

const comment = new Schema({
    idMovie: Number,
    category: Number,
    dataComment:[
        {
            name: String,
            comment: String,
            img:String,
            datetime:String,

        }
    ]
}, {
  timestamps: true
});

module.exports = mongoose.model('comment', comment)