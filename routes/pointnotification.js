const express = require('express');
const router = express.Router();
const PointNotification = require('../models/PointNotification');

router.get('/', async (req, res) => {
    try {
        const notifications = await PointNotification.find({});
        res.render('pointnotification', { notifications });
    } catch (err) {
        console.error('Failed to fetch data:', err);
        res.status(500).send('Failed to fetch data');
    }
});

module.exports = router;
