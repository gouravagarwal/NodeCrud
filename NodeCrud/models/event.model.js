const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create a schema
const eventSchema = new Schema({
    name:{type: String},
    slug:{type: String,unique:true},
    description: {type:String}
});


//create a model
const eventModel = mongoose.model('Event',eventSchema);

//export the model
module.exports = eventModel;