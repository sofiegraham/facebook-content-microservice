const postLikesData = require('../../seeds/seed_data/pregenerated_data/postLikesData.js');

exports.up = (knex) => {
  return knex.batchInsert('posts_likes', postLikesData, 10000)
    .catch((err) => {
      console.log('FAILED', err);
    });
};

exports.down = (knex) => {
  return knex('posts_likes').del().where('id', '>', 5000000);
};
