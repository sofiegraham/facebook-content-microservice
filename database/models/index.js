const userSchema = require('./users.js');
const pageSchema = require('./pages.js');
const pageLikeSchema = require('./pageLikes.js');
const postSchema = require('./posts.js');
const postLikeSchema = require('./postLikes.js');
const userFriendSchema = require('./userFriends.js');


module.exports = {
  userSchema,
  pageSchema,
  pageLikeSchema,
  postSchema,
  postLikeSchema,
  userFriendSchema,
};