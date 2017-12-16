const db = require('../database.js');

const Post = db.bookshelf.Model.extend({
  tableName: 'posts',
});

module.exports = Post;
