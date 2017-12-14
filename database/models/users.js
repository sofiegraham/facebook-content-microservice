module.exports = (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.date('birthday').notNullable();
  table.string('email').notNullable();
  table.string('location').notNullable();
  table.string('gender').defaultTo('non binary');
  table.string('relationshipStatus').defaultTo('single');
  table.timestamps(true, true);
};
