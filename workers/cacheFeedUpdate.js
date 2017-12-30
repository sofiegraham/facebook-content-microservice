const redis = require('../cache/index.js');
const db = require('../database/database.js');

const cacheFeedUpdate = (followId, postId, done) => {
  return db.knex.schema.raw(`SELECT user_id FROM users_follows WHERE follow_id = ${followId}`)
    .then((data) => {
      data.rows.forEach((userIdObj) => {
        const userId = userIdObj.user_id;
        redis.exists(userId, (err, reply) => {
          if (reply === 1) {
            redis.lpush(userId, postId);
            redis.rpop(userId);
          }
        });
      });
      done();
    })
    .catch((error) => {
      return done(new Error(`Unable to update cache for ${followId} followers: ${error}`));
    });
};

module.exports = cacheFeedUpdate;
