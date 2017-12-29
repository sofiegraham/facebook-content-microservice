exports.up = (knex) => {
  return knex.schema.table('users_follows', (table) => {
    table.dropIndex('follow_id');
    table.dropIndex('user_id');
  });
};

exports.down = (knex) => {
  return knex.schema.table('users_follows', (table) => {
    table.index('follow_id');
    table.index('user_id');
  });
};
