const express = require('express');
const router = express.Router();
const places = require('../models/placement');

router.get('/', async (req, res) => {
    try {
        const buttons = await places.find({});
        res.render('placement', { buttons });
    } catch (err) {
        console.error('Error fetching notifications:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;