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

module.exports.addUser = addUser;