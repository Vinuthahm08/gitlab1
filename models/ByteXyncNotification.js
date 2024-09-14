const mongoose = require('mongoose');

const byteXyncNotificationSchema = new mongoose.Schema({
    message: String,
    date: String // Assuming date is stored as a string
}, {
    collection: 'bytenotification' // Specify collection name here
});

module.exports = mongoose.model('ByteXyncNotification', byteXyncNotificationSchema);