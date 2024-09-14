const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

router.get('/', async (req, res) => {
    const { usn } = req.query;

    try {
        console.log('USN received:', usn);

        const results = await Result.find({ usn: usn });
        console.log('Data found:', results);

        res.render('result', { results });
    } catch (err) {
        console.error('Error fetching results:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
