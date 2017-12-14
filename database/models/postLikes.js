module.exports = (table) => {
  table.increments('id').primary();
  table.integer('user_id').references('users.id');
  table.integer('post_id').references('posts.id');
  table.timestamps(true, true);
};
