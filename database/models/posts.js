const db = require('../database.js');
require('./index.js');

const Post = db.bookshelf.Model.extend({
  tableName: 'posts',
  user() {
    return this.belongsTo('User', 'user_id');
  },
  page() {
    return this.belongsTo('Page', 'page_id');
  },
});

module.exports = db.bookshelf.model('Post', Post);
