const usersSeed = require('./seed_data/usersSeed.js');
const pagesSeed = require('./seed_data/pagesSeed.js');

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('pages').del();
    })
    .then(() => {
      return knex('users').insert(usersSeed);
    })
    .then(() => {
      return knex('pages').insert(pagesSeed);
    });
};
