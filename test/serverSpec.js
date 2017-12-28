const request = require('supertest');
//const assert = require('assert');
const app = require('../server/routes.js');
const { expect } = require('chai');


describe('GET /', () => {
  it('responds with response of 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET /users/:id/page_likes', () => {
  it('responds with an including page_ids', () => {
    return request(app)
      .get('/users/1/page_likes')
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body[0].hasOwnProperty('page_id')).to.equal(true);
      });
  });
});
