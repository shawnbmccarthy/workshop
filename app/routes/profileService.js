const router = require('express').Router();
const appDb = require('../db');

module.exports = () => {
    router.get('/api/profileService/v1/users', (req, res) => {
        appDb.getDatabase()
            .then(db => {
                /*
                 * This is the freebie!
                 */
                var cursor = db.collection('finduserprofile').find();
                cursor.toArray().then(docs => { return  res.json({result: docs})});
            })
            .catch(err => {
                res.statusCode = 500;
                return res.json({error: err});
            })
    });

    router.get('/api/profileService/v1/users/:id', (req, res) => {
        appDb.getDatabase()
            .then(db => {
                /*
                 * fill in the pieces
                 */
            })
            .catch(err => {
                res.statusCode = 500;
                return res.json({error: err});
            });
    });

    router.post('/api/profileService/v1/users', (req, res) => {
        appDb.getDatabase()
            .then(db => {
                /*
                 * fill in the pieces
                 */
            })
            .catch(err => {
                res.statusCode = 500;
                return res.json({error: err});
            });
    });

    router.put('/api/profileService/v1/users/:id', (req, res) => {
        appDb.getDatabase()
            .then(db => {
                /*
                 * fill in the pieces
                 */
            })
            .catch(err => {
                res.statusCode = 500;
                return res.json({error: err});
            });
    });

    router.delete('/api/profileService/v1/users/:id', (req, res) => {
        appDb.getDatabase()
            .then(db => {
                /*
                 * fill in the pieces
                 */
            })
            .catch(err => {
                res.statusCode = 500;
                return res.json({error: err});
            });
    });

    return router;
};