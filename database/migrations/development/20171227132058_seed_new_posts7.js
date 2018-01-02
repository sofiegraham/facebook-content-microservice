const postData = require('../../seeds/seed_data/pregenerated_data/postsData7.js');

exports.up = (knex) => {
  return knex.batchInsert('posts', postData, 10000);
};

exports.down = (knex) => {
  return knex('posts').del().where('id', '>', 8000000);
};
