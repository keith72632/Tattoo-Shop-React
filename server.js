const express = require('express');
const app = express();
const connectDb = require('./config/db')
const photoRouter = require('./routes/photoRoutes')

connectDb();


//environment initialization
require('dotenv').config();
app.use(express.json())
app.use('/api/photos', photoRouter)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))