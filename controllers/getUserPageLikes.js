const { PageLike } = require('../database/models/index.js');

const getUserPageLikes = (req, res, next) => {
  return PageLike.where({
    user_id: req.params.id,
  }).fetchAll({ columns: ['page_id'] })
    .then((results) => {
      req.pageLikes = results.models;
      next();
    }).catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = getUserPageLikes;
