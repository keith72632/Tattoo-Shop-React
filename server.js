const express = require('express');
const app = express();
const connectDb = require('./config/db');
const photoRouter = require('./routes/photoRoutes');
const colors = require('colors');
const userRouter = require('./routes/userRoutes')

connectDb();


//environment initialization
require('dotenv').config();
app.use(express.json())
app.use('/api/photos', photoRouter)
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`.cyan))