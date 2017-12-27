const { Post } = require('../database/models/index.js');

const addUserPost = (req, res, next) => {
  return new Post({
    user_id: req.params.id,
    page_id: req.body.page_id,
    content: req.body.content,
  }).save(null, { method: 'insert' })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = addUserPost;
