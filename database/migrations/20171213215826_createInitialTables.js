const {
  userSchema,
  pageSchema,
  pageLikeSchema,
  postSchema,
  postLikeSchema,
  userFriendSchema,
} = require('../models/index.js');

exports.up = knex => (
  knex.schema
    .createTable('users', userSchema)
    .createTable('pages', pageSchema)
    .createTable('pageLikes', pageLikeSchema)
    .createTable('posts', postSchema)
    .createTable('postLikes', postLikeSchema)
    .createTable('userFriends', userFriendSchema)
);

exports.down = knex => (
  knex.schema
    .dropTable('userFriends')
    .dropTable('postLikes')
    .dropTable('posts')
    .dropTable('pageLikes')
    .dropTable('pages')
    .dropTable('users')
);
