module.exports = (table) => {
  table.increments('id').primary();
  table.integer('user_id').references('users.id');
  table.integer('page_id').references('pages.id').defaultTo(null);
  table.text('content').defaultTo('');
  table.integer('likes').defaultTo(0);
  table.timestamps(true, true);
};
