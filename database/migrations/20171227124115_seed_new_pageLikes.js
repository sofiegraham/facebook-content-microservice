const pagesLikesData = require('../seeds/seed_data/pregenerated_data/pagesLikesData.js');

exports.up = (knex) => {
  return knex.batchInsert('pages_likes', pagesLikesData, 10000);
};

exports.down = (knex) => {
  return knex('pages_likes').del().where('id', '>', 1000000);
};
