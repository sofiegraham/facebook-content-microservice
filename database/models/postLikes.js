module.exports = (table) => {
  table.increments('id').primary();
  table.integer('user_id').references('users.id');
  table.integer('post_id').references('posts.id');
  table.timestamps(true, true);
  table.index('user_id');
  table.index('post_id');
};
