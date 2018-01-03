const { PostLike } = require('../database/models/index.js');
const db = require('../database/database.js');

const addPostLike = (req, res, next) => {
  return new PostLike({
    post_id: req.params.id,
    user_id: req.body.user_id,
  }).save(null, { method: 'insert' })
    .then(() => {
      return db.knex('posts')
        .where('id', '=', req.params.id)
        .increment('likes', 1);
    })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = addPostLike;
