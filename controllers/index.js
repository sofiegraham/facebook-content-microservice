const addPageLike = require('./addPageLike.js');
const addPostLike = require('./addPostLike.js');
const addUserPost = require('./addUserPost.js');
//const getUserFeed = require('./getUserFeed.js');
const getUserPageLikes = require('./getUserPageLikes.js');
const getUserDemographic = require('./getUserDemographic.js');
//const getCachedUserFeed = require('./getCachedUserFeed.js');
const routeFeedRequestToCacheOrDB = require('./routeFeedRequestToCacheOrDB.js');

module.exports = {
  addUserPost,
  addPostLike,
  getUserPageLikes,
  //getUserFeed,
  addPageLike,
  getUserDemographic,
  //getCachedUserFeed,
  routeFeedRequestToCacheOrDB,
};
