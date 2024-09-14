const mongoose = require('mongoose');

const pointNotificationSchema = new mongoose.Schema({
    message: String,
    date: String // Assuming date is stored as a string
}, {
    collection: 'pointnotification' // Specify collection name here
});

module.exports = mongoose.model('PointNotification', pointNotificationSchema);