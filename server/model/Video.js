const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    title: {
        type:String,
        maxlength:50,
    },
    description: {
        type: String,
    },
    
    file : {
        type: String,
    },
    views : {
        type: Number,
        default: 0 
    },
    duration :{
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true })


const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }
