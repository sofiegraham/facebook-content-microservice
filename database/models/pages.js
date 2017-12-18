const db = require('../database.js');
require('./index.js');

const Page = db.bookshelf.Model.extend({
  tableName: 'posts',
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

module.exports = db.bookshelf.model('Page', Page);
