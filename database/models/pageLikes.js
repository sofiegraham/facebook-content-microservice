const db = require('../database.js');
require('./index.js');

const PageLike = db.bookshelf.Model.extend({
  tableName: 'pages_likes',
  user() {
    return this.belongsTo('User', 'user_id');
  },
  page() {
    return this.belongsTo('Page', 'page_id');
  },
});

module.exports = db.bookshelf.model('PageLike', PageLike);
