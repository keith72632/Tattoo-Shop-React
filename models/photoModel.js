const mongoose = require('mongoose');


const photoSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
