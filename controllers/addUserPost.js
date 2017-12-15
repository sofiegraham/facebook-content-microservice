const db = require('../database/database.js');

const Post = db.bookshelf.Model.extend({
  tableName: 'posts',
});

const addUserPost = (req, res, next) => {
  const newPost = new Post({
    user_id: req.params.id || 1,
    page_id: req.body.page_id || null,
    content: req.body.content || 'Testing content',
  });
  return newPost.save(null, { method: 'insert' })
    .then((data) => {
      console.log(data, 'DAATATAT');
      next();
    })
    .catch((err) => {
      console.log(err, 'ERERE');
      res.status(500).end();
    });
};

module.exports = addUserPost;
