const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = 4001;  // You can change this if the port is already in use

const mongoURI = 'mongodb://localhost:27017/DEPARTMENTNEWS';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB Connected');

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

        app.get('/', (req, res) => {
            res.send('Hello World');
        });

        const akiraNotificationRouter = require('./routes/akiranotification');
        const byteXyncNotificationRouter = require('./routes/bytexyncnotification');
        const osCodeNotificationRouter = require('./routes/oscodenotification');
        const pointNotificationRouter = require('./routes/pointnotification');
        const resultRouter = require('./routes/result');
        const placeRouter = require('./routes/placement');
        const adminRouter = require('./routes/admin');

        app.use('/akira', akiraNotificationRouter);
        app.use('/bytexync', byteXyncNotificationRouter);
        app.use('/oscode', osCodeNotificationRouter);
        app.use('/point', pointNotificationRouter);
        app.use('/result', resultRouter);
        app.use('/place', placeRouter);
        app.use('/admin', adminRouter);

    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
