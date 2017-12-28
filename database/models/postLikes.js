const db = require('../database.js');
require('./index.js');

const PostLike = db.bookshelf.Model.extend({
  tableName: 'posts_likes',
  user() {
    return this.belongsTo('User', 'user_id');
  },
  page() {
    return this.belongsTo('Post', 'post_id');
  },
});

module.exports = db.bookshelf.model('PostLike', PostLike);
