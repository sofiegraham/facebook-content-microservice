const db = require('../database.js');

const User = db.bookshelf.Model.extend({
  tableName: 'users',
});

module.exports = User;
