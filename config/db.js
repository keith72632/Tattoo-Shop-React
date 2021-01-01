const mongoose = require('mongoose');
const colors = require('colors');
const connectDb = async() => {
    try{
        const connect = await mongoose.connect('mongodb+srv://thinmint:tigers10@clusterk.98gsi.mongodb.net/Tattoo?retryWrites=true&w=majority',{
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Connecting to MongoDB database'.green.underline)
    } catch(error) {
        throw new Error('Error connecting to database'.red.bold)
    }
}

module.exports = connectDb