exports.up = (knex) => {
  return knex.schema.table('posts', (table) => {
    table.index('user_id');
    table.index('page_id');
  });
};

exports.down = (knex) => {
  return knex.schema.table('posts', (table) => {
    table.dropIndex('user_id');
    table.dropIndex('page_id');
  });
};

