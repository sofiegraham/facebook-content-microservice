const {
  userSchema,
  pageSchema,
  pageLikeSchema,
  postSchema,
  postLikeSchema,
  userFriendSchema,
} = require('../../database/schemas/index.js');

exports.up = knex => (
  knex.schema
    .createTable('users', userSchema)
    .createTable('pages', pageSchema)
    .createTable('pages_likes', pageLikeSchema)
    .createTable('posts', postSchema)
    .createTable('posts_likes', postLikeSchema)
    .createTable('users_friends', userFriendSchema)
);

exports.down = knex => (
  knex.schema
    .dropTable('users_friends')
    .dropTable('posts_likes')
    .dropTable('posts')
    .dropTable('pages_likes')
    .dropTable('pages')
    .dropTable('users')
);
