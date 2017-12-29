const db = require('../database/database.js');
const redis = require('../cache/index.js');

const getUserFeed = (req, res, next) => {
  return db.knex.schema.raw(`SELECT * FROM posts WHERE user_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) AND page_id IS NULL UNION SELECT * FROM posts WHERE page_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) ORDER BY created_at DESC LIMIT 10`)
    .then((data) => {
      const postStrings = [...data.rows].map((post) => {
        return post.id;
      });
      redis.rpush([req.params.id, ...postStrings], (error, reply) => {
        if (error) {
          console.log('REDIS FAILED TO CACHE', error);
        }
      });
      req.feed = data.rows;
      next();
    }).catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = getUserFeed;
