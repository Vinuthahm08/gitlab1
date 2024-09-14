const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// GET /signup - Render signup form
router.get('/signup', (req, res) => {
    console.log('GET /signup');
    res.render('signup');
});

// POST /signup - Handle signup form submission
router.post('/signup', async (req, res) => {
    console.log('POST /signup');
    try {
        const newAdmin = new Admin({
            adminid: req.body.adminid,
            username: req.body.name,
            passwd: req.body.password
        });
        await newAdmin.save();
        res.redirect('/admin/login'); // Redirect to login page after successful signup
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Error signing up. Please try again later.');
    }
});

// GET /login - Render login form
router.get('/login', (req, res) => {
    console.log('GET /login');
    res.render('login');
});

// POST /login - Handle login form submission
router.post('/login', async (req, res) => {
    console.log('POST /login');
    try {
        const admin = await Admin.findOne({ username: req.body.name });
        if (admin && admin.passwd === req.body.password) {
            res.redirect('/admin/dashboard'); // Redirect to a dashboard or home page
        } else {
            res.status(401).send('Invalid username or password.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Error logging in. Please try again later.');
    }
});

module.exports = router;
