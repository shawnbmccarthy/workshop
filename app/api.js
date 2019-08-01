const express = require('express');
const parser = require('body-parser');
const db = require('./db');
const profileService = require('./routes/profileService');
/*
 * can you build  more services?
 */
const app = express();
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());
app.use(profileService(db));
var server = app.listen(8080, ()  => {
    console.log('running on 8080');
});

module.exports = app;