const mongoose = require('mongoose');

const connectDB = async function(){
    await mongoose.connect(process.env.MONGO_URI,{
        // options
            useNewUrlParser: true,
            useUnifiedTopology: true,
    });
    console.log(`mongoDB connected successfully :)`);
}

module.exports = connectDB;