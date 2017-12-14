const db = require('../index.js');

const User = db.Model.extend({
  tableName: 'users',
  posts: () => this.hasMany(Posts),
});

module.exports = User;
