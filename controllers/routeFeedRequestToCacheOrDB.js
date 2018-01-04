const redis = require('../cache/index.js');
const getCachedUserFeed = require('./getCachedUserFeed.js');
const getUserFeed = require('./getUserFeed.js');

const routeFeedRequestToCacheOrDB = (req, res, next) => {
  if (redis) {
    redis.exists(req.params.id, (err, reply) => {
      if (reply === 1) {
        getCachedUserFeed(req, res, next);
      } else {
        getUserFeed(req, res, next);
      }
    });
  } else {
    getUserFeed(req, res, next);
  }
};

module.exports = routeFeedRequestToCacheOrDB;
