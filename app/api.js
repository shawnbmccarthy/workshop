const express = require('express');
const parser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const client = new mongodb.MongoClient( process.env.MURL, {useNewUrlParser: true});
let db = null;
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.get('/api/profileService/v1/users', (req, res) => {
    /*
     * return an array
     */
});

app.get('/api/profileService/v1/users/:id', (req, res) => {
    /*
     * fill in the pieces
     */
});

app.post('/api/profileService/v1/users', (req, res) => {
    /*
     * fill in this
     */
});

app.put('/api/profileService/v1/users/:id', (req, res) => {
    /*
     * fill in this
     */
});

app.delete('/api/profileService/v1/users/:id', (req, res) => {
    /*
     * fill in  this
     */
});

/*
 * now add a blog of your own
 */

(async () => {
    await client.connect();
    db = client.db('ecommerce');
    app.listen(8080, () => {
        console.log('running');
    });
})();