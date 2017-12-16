const { Post } = require('../database/models/index.js');

const addUserPost = (req, res, next) => {
  return new Post({
    user_id: req.params.id,
    page_id: req.body.page_id,
    content: req.body.content,
  }).save(null, { method: 'insert' })
    .then((data) => {
      console.log('SUCCESS addingUserPost', data);
      next();
    })
    .catch((err) => {
      console.log('ERROR addingUserPost', err);
      res.status(500).end();
    });
};

module.exports = addUserPost;