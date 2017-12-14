module.exports = (table) => {
  table.increments('id').primary();
  table.integer('user_id').references('users.id');
  table.integer('friend_id').references('users.id');
  table.timestamps(true, true);
};
