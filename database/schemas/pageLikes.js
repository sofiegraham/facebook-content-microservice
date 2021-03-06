module.exports = (table) => {
  table.increments('id').primary();
  table.integer('user_id').references('users.id');
  table.integer('page_id').references('pages.id');
  table.timestamps(true, true);
  table.index('user_id');
  table.index('page_id');
};
