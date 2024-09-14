const express = require('express');
const router = express.Router();
const OsCodeNotification = require('../models/OsCodeNotification');

router.get('/', async (req, res) => {
    try {
        const notifications = await OsCodeNotification.find({});
        res.render('oscodenotification', { notifications });
    } catch (err) {
        console.error('Failed to fetch data:', err);
        res.status(500).send('Failed to fetch data');
    }
});

module.exports = router;
