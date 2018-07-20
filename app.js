const express = require('express');

const app = express();
const router = require('./routes');
const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost/interlink-meetup';
mongoose.connect(DB_URL, function (err) {
    if(err) {
        console.error('Mongo connection FAIL:' + err);
    }
    else{
        console.log('Mongo connection OK')
    }
});

app.use(express.json());
app.use(router);

module.exports = app;