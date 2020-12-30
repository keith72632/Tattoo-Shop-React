const User = require('../models/userModel');
const mongoose = require('mongoose');


const addUser = async(req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;
    const userExist = await User.findOne({ email });

    if(userExist) {
        res.status(401).send('Already a user with this email');
        console.error('Already a user with this email');
    } else {
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            isAdmin
        });

        await user.save();
        res.status(201).json(user);
    }

    
}

const authorizeUser = async(req, res) => {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if(userExist && await userExist.matchPassword(password)) {
        res.status(200).json('Login Successful');
    } else {
       res.status(400).send('Something wrong with email or password');
       throw new Error('something wrong with email and passsword')
    };
    
}

module.exports.addUser = addUser;
module.exports.authorizeUser = authorizeUser;