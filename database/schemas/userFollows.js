module.exports = (table) => {
  table.increments('id').primary();
  table.integer('user_id').references('users.id');
  table.integer('follow_id');
  table.string('follow_type');
  table.timestamps(true, true);
  table.index('user_id');
  table.index('follow_id');
};
