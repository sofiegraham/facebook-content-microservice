const { PageLike } = require('../database/models/index.js');

const getUserPageLikes = (req, res, next) => {
  return PageLike.where({
    user_id: Number(req.params.id),
  }).fetchAll({ columns: ['page_id'] })
    .then((results) => {
      req.pageLikes = results.models;
      next();
    }).catch((err) => {
      res.status(500).end(err);
    });
};

module.exports = getUserPageLikes;
