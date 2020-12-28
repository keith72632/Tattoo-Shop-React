const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        reqired: true,
        maxLength: 30
    },
    lastName: {
        type: String,
        require: true,
        maxLength: 30
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;