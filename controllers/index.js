const addPageLike = require('./addPageLike.js');
const addPostLike = require('./addPostLike.js');
const addUserPost = require('./addUserPost.js');
const getUserPageLikes = require('./getUserPageLikes.js');
const getUserDemographic = require('./getUserDemographic.js');
const routeFeedRequestToCacheOrDB = require('./routeFeedRequestToCacheOrDB.js');
const listColumnSchemas = require('./listColumnSchemas.js');

module.exports = {
  addUserPost,
  addPostLike,
  getUserPageLikes,
  addPageLike,
  getUserDemographic,
  routeFeedRequestToCacheOrDB,
  listColumnSchemas,
};
