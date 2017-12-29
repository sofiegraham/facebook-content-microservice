const redis = require('../cache/index.js');
const db = require('../database/database.js');

const getCachedUserFeed = (req, res, next) => {
  redis.lrange(req.params.id, 0, -1, (err, postIds) => {
    if (err) {
      res.status(500).json(err);
    } else {
      return db.knex.schema.raw(`SELECT * FROM posts WHERE id IN (${postIds}) ORDER BY created_at DESC`)
        .then((data) => {
          req.feed = data.rows;
          next();
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    }
  });
};

module.exports = getCachedUserFeed;
