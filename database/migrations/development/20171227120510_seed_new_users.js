const usersData = require('../../seeds/seed_data/pregenerated_data/usersData.js');

exports.up = (knex) => {
  const timeNow = Date.now();

  return knex.batchInsert('users', usersData, 10000)
    .then(() => {
      console.log('total seconds:', (Date.now() - timeNow) / 1000);
    });
};

exports.down = (knex) => {
  return knex('users').del().where('id', '>', 400000);
};