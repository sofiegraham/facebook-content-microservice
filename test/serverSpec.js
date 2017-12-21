const request = require('supertest');
const app = require('../server/app.js');

describe('GET /', function() {
  it('responds with response of 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /users/:id/page_likes', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/schedule_dates')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/, done)
  });
});
