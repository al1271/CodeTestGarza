const request = require('supertest');
const app = require('./app');

it('should return form', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .end(done)
});