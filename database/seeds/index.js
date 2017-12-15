const createFakeUser = require('./seed_data/usersSeed.js');
const createFakePage = require('./seed_data/pagesSeed.js');
const createFakePageLikes = require('./seed_data/pageLikesSeed.js');
const createFakePosts = require('./seed_data/postsSeed.js');
const createFakePostLikes = require('./seed_data/postLikesSeed.js');
const createFakeUserFriends = require('./seed_data/userFriendsSeed.js');

const USER_COUNT = 20000;
const PAGE_COUNT = 10000;
const PAGE_LIKE_COUNT = 50000;
const POST_COUNT = 100000;
const POST_LIKE_COUNT = 250000;
const USER_FRIEND_COUNT = 100000;
// 20 seconds at USER_COUNT 20,000;
// 5 mins 30 seconds at USER_COUNT 200,000;
const BATCH_CHUNK_SIZE = 10000;

exports.seed = (knex) => {
  let timeNow = Date.now();
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
    })
    .then(() => {
      const data = [];
      for (let i = 0; i < POST_COUNT; i += 1) {
        data.push(createFakePosts(1, USER_COUNT, 1, PAGE_COUNT));
      }
      return knex.batchInsert('posts', data, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const data = [];
      for (let i = 0; i < POST_LIKE_COUNT; i += 1) {
        data.push(createFakePostLikes(1, USER_COUNT, 1, POST_COUNT));
      }
      return knex.batchInsert('posts_likes', data, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const data = [];
      for (let i = 0; i < USER_FRIEND_COUNT; i += 1) {
        data.push(createFakeUserFriends(1, USER_COUNT));
      }
      return knex.batchInsert('users_friends', data, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      console.log('total seconds:', (Date.now() - timeNow) / 1000);
    });
};
