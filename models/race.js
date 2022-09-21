const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        maxLength:[20,"name cant be longer than 20 character"]
    },
    last_name:{
        type:String,
        required:true,
        maxLength:[20,"last name cant be longer than 20 character"]
    },
    rank:{
        type:Number,
        unique:true,
        required:true
    },
    sports:{
        type:String,
        required:true
    }
});

const Race = mongoose.model("Race",raceSchema);

module.exports = Race;