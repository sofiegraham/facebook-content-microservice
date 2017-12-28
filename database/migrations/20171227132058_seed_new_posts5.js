const postData = require('../seeds/seed_data/pregenerated_data/postsData5.js');

exports.up = (knex) => {
  return knex.batchInsert('posts', postData, 10000);
};

exports.down = (knex) => {
  return knex('posts').del().where('id', '>', 6000000);
};
