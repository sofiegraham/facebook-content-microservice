const db = require('../database.js');
require('./index.js');

const User = db.bookshelf.Model.extend({
  tableName: 'users',
  posts() {
    return this.hasMany('Post');
  },
  pageLikes() {
    return this.hasMany('PageLike');
  },
  userFollows() {
    return this.morphMany('UserFollow', 'follow');
  },
});

module.exports = db.bookshelf.model('User', User);
