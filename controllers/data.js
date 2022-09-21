const Race = require('../models/race');


exports.addRecord = async(req,res)=>{

const { first_name, last_name, sports,rank } = req.body;
console.log('req.body: ', req.body);

const data = await Race.create({
    first_name, last_name, sports,rank
})
data.save();

        res.status(201).json({
            success:true,
            data,
            message :"created successfully"
        })
}