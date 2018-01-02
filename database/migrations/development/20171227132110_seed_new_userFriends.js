const userFriendsData = require('../../seeds/seed_data/pregenerated_data/userFriendsData.js');

exports.up = (knex) => {
  return knex.batchInsert('users_friends', userFriendsData, 10000);
};

exports.down = (knex) => {
  return knex('users_friends').del().where('id', '>', 2000000);
};
