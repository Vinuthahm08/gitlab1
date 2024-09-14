const mongoose = require('mongoose');

const osCodeNotificationSchema = new mongoose.Schema({
    message: String,
    date: String // Assuming date is stored as a string
}, {
    collection: 'oscodenotification' // Specify collection name here
});

module.exports = mongoose.model('OsCodeNotification', osCodeNotificationSchema);