module.exports = (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.text('description').defaultTo('');
  table.timestamps(true, true);
};
