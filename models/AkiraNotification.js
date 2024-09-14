const mongoose = require('mongoose');

const akiraNotificationSchema = new mongoose.Schema({
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'anotification' 
});

module.exports = mongoose.model('AkiraNotification', akiraNotificationSchema);