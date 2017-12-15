const express = require('express');
const bodyParser = require('body-parser');
//const ctrl = require('../controllers/index.js');

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

//module.exports = addUserPost;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client'));

app.post('/users/:id/posts', addUserPost, (req, res) => {
  res.status(200).end();
});

// app.get('/schedule_dates', (req, res) => {
//   res.json({apple: 1});
// });

// app.patch('/employee_availability', (req, res) => {
//   res.json(req.empoloyeeAvailabilities);
// });

// app.post('/needed_employees', (req, res) => {
//   res.json(req.scheduleTemplate);
// });

module.exports = app;