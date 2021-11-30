var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
    name: {type: String, required:[true,"name needed"]}
},{timestamps:true});



module.exports=mongoose.model('Person',personSchema);