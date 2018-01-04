const { Post } = require('../database/models/index.js');
const queueCacheFanout = require('./queueCacheFanout.js');

const addUserPost = (req, res, next) => {
  return new Post({
    user_id: req.params.id,
    page_id: req.body.page_id,
    content: req.body.content,
  }).save(null, { method: 'insert' })
    .then((post) => {
      req.post = post.attributes;
      next();
      queueCacheFanout(req, post);
    })
    .catch((err) => {
      res.status(500).json(`ERROR: Could not save post to DB: ${err}`);
    });
};

module.exports = addUserPost;
