const { PageLike } = require('../database/models/index.js');

const getUserPageLikes = (req, res, next) => {
  return PageLike.where({
    user_id: Number(req.params.id),
  }).fetchAll()
    .then((results) => {
      req.pageLikes = results.models;
      next();
    }).catch((err) => {
      console.log('ERROR gettingUserPageLikes', err);
      res.status(500).end();
    });
};

module.exports = getUserPageLikes;
