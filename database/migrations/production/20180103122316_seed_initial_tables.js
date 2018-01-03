const createFakeUser = require('../../seeds/seed_data/usersSeed.js');
const createFakePage = require('../../seeds/seed_data/pagesSeed.js');
const createFakePageLikes = require('../../seeds/seed_data/pageLikesSeed.js');
const createFakePosts = require('../../seeds/seed_data/postsSeed.js');
const createFakePostLikes = require('../../seeds/seed_data/postLikesSeed.js');
const createFakeUserFriends = require('../../seeds/seed_data/userFriendsSeed.js');

const USER_COUNT = process.env.SEED_USER_COUNT;//1million
const PAGE_COUNT = process.env.SEED_PAGE_COUNT;//500,000
const PAGE_LIKE_COUNT = process.env.SEED_PAGE_LIKE_COUNT;//2million
const POST_COUNT = process.env.SEED_POST_COUNT; //10million
const POST_LIKE_COUNT = process.env.SEED_POST_LIKE_COUNT; //5million
const USER_FRIEND_COUNT = process.env.SEED_USER_FRIEND_COUNT;//5million

const BATCH_CHUNK_SIZE = 1000;

const generateDataArray = (numberOfRows, fakeDataFunction, ...fakeDataArgs) => {
  const data = [];
  for (let i = 0; i < numberOfRows; i += 1) {
    data.push(fakeDataFunction(...fakeDataArgs));
  }
  return data;
};

exports.up = (knex) => {
  const timeNow = Date.now();

  const userData = generateDataArray(USER_COUNT, createFakeUser);
  return knex.batchInsert('users', userData, BATCH_CHUNK_SIZE)
    .then(() => {
      const pageData = generateDataArray(PAGE_COUNT, createFakePage);
      return knex.batchInsert('pages', pageData, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const pageLikesData = generateDataArray(PAGE_LIKE_COUNT, createFakePageLikes, 1, USER_COUNT, 1, PAGE_COUNT);
      return knex.batchInsert('pages_likes', pageLikesData, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const postData = generateDataArray(POST_COUNT, createFakePosts, 1, USER_COUNT, 1, PAGE_COUNT);
      return knex.batchInsert('posts', postData, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const postLikesData = generateDataArray(POST_LIKE_COUNT, createFakePostLikes, 1, USER_COUNT, 1, POST_COUNT);
      return knex.batchInsert('posts_likes', postLikesData, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      const userFriendsData = generateDataArray(USER_FRIEND_COUNT, createFakeUserFriends, 1, USER_COUNT);
      return knex.batchInsert('users_friends', userFriendsData, BATCH_CHUNK_SIZE);
    })
    .then(() => {
      console.log('total seconds:', (Date.now() - timeNow) / 1000);
    });
};

exports.down = (knex) => {
  return knex('users_friends').del()
    .then(() => {
      return knex('posts_likes').del();
    })
    .then(() => {
      return knex('posts').del();
    })
    .then(() => {
      return knex('pages_likes').del();
    })
    .then(() => {
      return knex('pages').del();
    })
    .then(() => {
      return knex('users').del();
    });
};
