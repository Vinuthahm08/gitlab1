const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminid: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    passwd: { type: String, required: true }
}, { collection: 'admin' });

// Prevent OverwriteModelError by checking if the model is already compiled
module.exports = mongoose.models.Admin || mongoose.model('Admin', adminSchema);
