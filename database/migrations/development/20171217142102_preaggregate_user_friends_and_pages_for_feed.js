const { userFollowSchema } = require('../../schemas/index.js');

exports.up = knex => (
  knex.schema
    .createTable('users_follows', userFollowSchema)
);

exports.down = knex => (
  knex.schema
    .dropTable('users_follows')
);
