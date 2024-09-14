const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    usn: String,  // USN is stored as a string
    name: String,
    cgpa: Number
}, {
    collection: 'result'
});

module.exports = mongoose.model('Result', resultSchema);