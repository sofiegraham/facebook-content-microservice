const db = require('../database/database.js');

const getUserFeed = (req, res, next) => {
  return db.knex.schema.raw(`SELECT * FROM posts WHERE user_id IN (SELECT friend_id FROM users_friends WHERE user_id = ${req.params.id}) OR  page_id IN (SELECT page_id FROM pages_likes WHERE user_id = ${req.params.id})`)
    .then((data) => {
      req.feed = data.rows;
      next();
    }).catch((err) => {
      res.status(500).end(err);
    });
};

module.exports = getUserFeed;



//find all friends for that user
// retur
//SELECT COUNT (*) FROM posts WHERE user_id IN (SELECT friend_id FROM users_friends WHERE user_id = 3) OR  page_id IN (SELECT page_id FROM pages_likes WHERE user_id = 3);
//find all page follows for that user
// find all posts for all friends/posts
//serve those back