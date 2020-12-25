const mongoose = require('mongoose');

const connectDb = async() => {
    try{
        const connect = await mongoose.connect('mongodb+srv://thinmint:tigers10@clusterk.98gsi.mongodb.net/Tattoo?retryWrites=true&w=majority',{
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })
        console.log('Connecting to MongoDB database')
    } catch(error) {
        throw new Error('Error connecting to database')
    }
}

module.exports = connectDb