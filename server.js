require('dotenv').config({path:'./config.env'})
const express = require('express');
const connectDB = require('./db/conn');


const app = express();

const PORT = process.env.PORT || 4500;

// calling db function..
connectDB();

app.use('/api/auth', require('./routes/raceRoutes'));

app.get('/', async (req,res)=>{
    res.send("Server is working ...");
});

const server = app.listen(PORT, ()=>{
    console.log(`listening to the port number ${PORT}`);
});