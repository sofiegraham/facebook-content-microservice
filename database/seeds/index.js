const createFakeUser = require('./seed_data/usersSeed.js');
const createFakePage = require('./seed_data/pagesSeed.js');
const createFakePageLikes = require('./seed_data/pageLikesSeed.js');
const createFakePosts = require('./seed_data/postsSeed.js');
const createFakePostLikes = require('./seed_data/postLikesSeed.js');
const createFakeUserFriends = require('./seed_data/userFriendsSeed.js');

const USER_COUNT = 400000;
const PAGE_COUNT = 200000;
const PAGE_LIKE_COUNT = 1000000;
const POST_COUNT = 2000000;
const POST_LIKE_COUNT = 5000000;
const USER_FRIEND_COUNT = 2000000;

const BATCH_CHUNK_SIZE = 10000;

const generateDataArray = (numberOfRows, fakeDataFunction, ...fakeDataArgs) => {
  const data = [];
  for (let i = 0; i < numberOfRows; i += 1) {
    data.push(fakeDataFunction(...fakeDataArgs));
  }
  return data;
};

exports.seed = (knex) => {
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
