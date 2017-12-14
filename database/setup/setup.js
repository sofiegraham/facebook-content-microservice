const db = require('../database.js');

db.knex.schema.createTableIfNotExists('users', (table) => {
  table.increments('id');
  table.string('name');
  table.date('birthday');
  table.string('email');
  table.string('gender');
  table.string('relationshipStatus');
  table.string('location');
  table.timestamps(true);
}).then(() => {
  console.log('created users table');
  db.knex.destroy();
});

