const { PageLike } = require('../database/models/index.js');

const addPostLike = (req, res, next) => {
  return new PageLike({
    page_id: req.params.id,
    user_id: req.body.user_id,
  }).save(null, { method: 'insert' })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = addPostLike;
