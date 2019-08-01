const express = require('express');
const request = require('supertest');
const mongodb = require('mongodb');
const parser = require('body-parser');
const profileService  = require('./profileService');

const initApp = () => {
    /*
     * setup app
     */
    const app = express();
    app.use(parser.urlencoded({extended: false}));
    app.use(parser.json());
    app.use(profileService());
    return app;
};

describe('GET /api/profileService/v1/users', () => {
    let app;
    beforeAll(() => {
        app = initApp();
    });

    test('It should 200 and return an empty array', async () => {
        await request(app)
            .get('/api/profileService/v1/users')
            .expect('Content-Type', /json/)
            .expect(200)
    });
});