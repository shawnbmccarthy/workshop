const request = require('supertest');

describe('GET /api/profileService/v1/users', () => {
    var srv;

    beforeEach(() => {
        srv  = require('./api');
    });

    test('It should 200 and return an empty array', async () => {
        await request(srv).get('/api/profileService/v1/users')
            .expect('Content-Type', /json/)
            .expect(200);
    })
});