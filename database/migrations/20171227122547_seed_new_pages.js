const pagesData = require('../seeds/seed_data/pregenerated_data/pagesData.js');

exports.up = (knex) => {
  return knex.batchInsert('pages', pagesData, 10000);
};

exports.down = (knex) => {
  return knex('pages').del().where('id', '>', 200000);
};
