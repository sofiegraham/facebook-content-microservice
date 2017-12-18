const db = require('../database.js');
require('./index.js');

const UserFollow = db.bookshelf.Model.extend({
  tableName: 'users_follows',
  follow() {
    return this.morphTo('follow', 'User', 'Page');
  },
});

module.exports = db.bookshelf.model('UserFollow', UserFollow);
