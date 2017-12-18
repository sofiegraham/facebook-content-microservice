const db = require('../database/database.js');

// const getUserFeed = (req, res, next) => {
//   return db.knex.schema.raw(`SELECT * FROM posts WHERE user_id IN (SELECT friend_id FROM users_friends WHERE user_id = ${req.params.id}) OR  page_id IN (SELECT page_id FROM pages_likes WHERE user_id = ${req.params.id})`)
//     .then((data) => {
//       req.feed = data.rows;
//       next();
//     }).catch((err) => {
//       res.status(500).end(err);
//     });
// };

const getUserFeed = (req, res, next) => {
  return db.knex.schema.raw(`SELECT * FROM posts WHERE user_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id})`)
    .then((data) => {
      req.feed = data.rows;
      next();
    }).catch((err) => {
      res.status(500).end(err);
    });
};

module.exports = getUserFeed;
