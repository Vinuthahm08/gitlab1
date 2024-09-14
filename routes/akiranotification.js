const express = require('express');
const router = express.Router();
const AkiraNotification = require('../models/AkiraNotification');

router.get('/', async (req, res) => {
    try {
        const notifications = await AkiraNotification.find({}).sort({ date: -1 });
        res.render('akiranotification', { notifications });
    } catch (err) {
        console.error('Error fetching notifications:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
