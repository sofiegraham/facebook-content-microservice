const request = require('supertest');
const assert = require('assert');
const app = require('../server/app.js');
const db = require('../database/database.js');
const expect = require('chai').expect;


describe('GET /', () => {
  it('responds with response of 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe ('GET /stuff', () => {
  it('respond with json', () => {
    return request(app)
      .get('/users/1/page_likes')
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        expect(response.body[0].hasOwnProperty('page_id')).to.equal(true);
      });
  });
});
