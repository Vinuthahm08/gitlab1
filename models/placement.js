const mongoose= require('mongoose');

const placementSchema = new mongoose.Schema({
    no_of_students: Number,
    company_name:String,
    year: Number
},{
    collection:'placement'
});



module.exports = mongoose.model('Placement',placementSchema);