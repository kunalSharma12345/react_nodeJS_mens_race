require('dotenv').config({path:'./config.env'})
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4500;


app.get('/', async (req,res)=>{
    res.send("Server is working ...");
});

const server = app.listen(PORT, ()=>{
    console.log(`listening to the port number ${PORT}`);
});