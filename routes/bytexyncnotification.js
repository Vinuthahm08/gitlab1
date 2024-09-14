const express = require('express');
const router = express.Router();
const ByteXyncNotification = require('../models/ByteXyncNotification');

router.get('/', async (req, res) => {
    try {
        const notifications = await ByteXyncNotification.find({});
        res.render('bytexyncnotification', { notifications });
    } catch (err) {
        console.error('Failed to fetch data:', err);
        res.status(500).send('Failed to fetch data');
    }
});

module.exports = router;
