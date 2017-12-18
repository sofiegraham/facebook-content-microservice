const db = require('../database.js');
require('./index.js');

const UserFriend = db.bookshelf.Model.extend({
  tableName: 'users_friends',
  user() {
    return this.belongsTo('User', 'user_id');
  },
  friend() {
    return this.belongsTo('User', 'friend_id');
  },
});

module.exports = db.bookshelf.model('UserFriend', UserFriend);
