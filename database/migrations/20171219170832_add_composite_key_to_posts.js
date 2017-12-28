
exports.up = (knex) => {
  return knex.schema.table('posts', (table) => {
    table.index(['user_id', 'page_id'], 'composite_user_page_id');
  });
};

exports.down = (knex) => {
  return knex.schema.table('posts', (table) => {
    table.dropIndex(['user_id', 'page_id'], 'composite_user_page_id');
  });
};
