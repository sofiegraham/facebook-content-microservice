const {
  userData,
  pageData,
  pageLikesData,
  postData,
  postLikesData,
  userFriendsData,
} = require('../testDBdata.js');

exports.up = (knex) => {
  return knex.batchInsert('users', userData, 1000)
    .then(() => {
      return knex.batchInsert('pages', pageData, 1000);
    })
    .then(() => {
      return knex.batchInsert('pages', pageData, 1000);
    })
    .then(() => {
      return knex.batchInsert('pages_likes', pageLikesData, 1000);
    })
    .then(() => {
      return knex.batchInsert('posts', postData, 1000);
    })
    .then(() => {
      return knex.batchInsert('posts_likes', postLikesData, 1000);
    })
    .then(() => {
      return knex.batchInsert('users_friends', userFriendsData, 1000);
    })
    .then(() => {
      console.log('Done seeding db');
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
