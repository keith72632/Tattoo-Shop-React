const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

userSchema.pre('save', async function(next) {
    if(!this.isModified) {
        next();
    } else {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt); 
    }
})

userSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);

}


const User = mongoose.model('User', userSchema);

module.exports = User;