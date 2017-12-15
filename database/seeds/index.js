const createFakeUser = require('./seed_data/usersSeed.js');
const createFakePage = require('./seed_data/pagesSeed.js');
const createFakePageLikes = require('./seed_data/pageLikesSeed.js');

const USER_COUNT = 2000;
const PAGE_COUNT = 1000;
const PAGE_LIKE_COUNT = 5000;
const BATCH_CHUNK_SIZE = 1000;

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('pages').del();
    })
    .then(() => {
      const data = [];
      for (let i = 0; i < USER_COUNT; i += 1) {
        data.push(createFakeUser());
      }
      return knex.batchInsert('users', data, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const data = [];
      for (let i = 0; i < PAGE_COUNT; i += 1) {
        data.push(createFakePage());
      }
      return knex.batchInsert('pages', data, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const data = [];
      for (let i = 0; i < PAGE_LIKE_COUNT; i += 1) {
        data.push(createFakePageLikes(1, USER_COUNT, 1, PAGE_COUNT));
      }
      return knex.batchInsert('pages_likes', data, BATCH_CHUNK_SIZE);
    });
};


// users 2 million YUP
// pages 1 million
// pagelikes 5 million (pageIds userIds)
// posts 20 million
// postlikes 200 million
// userfriends 40 million
