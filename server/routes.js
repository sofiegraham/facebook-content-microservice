const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('../controllers/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client`));

app.post('/users/:id/posts', ctrl.addUserPost, (req, res) => {
  res.status(200).end();
});

app.post('/posts/:id/likes', ctrl.addPostLike, (req, res) => {
  res.status(200).end();
});

app.post('/pages/:id/likes', ctrl.addPageLike, (req, res) => {
  res.status(200).end();
});

app.get('/users/:id/feed', ctrl.getUserFeed, (req, res) => {
  res.json(req.feed);
});

app.get('/users/:id/page_likes', ctrl.getUserPageLikes, (req, res) => {
  res.json(req.pageLikes);
});

app.get('/users/:id/demographic', ctrl.getUserDemographic, (req, res) => {
  res.json(req.userDemographic);
});

module.exports = app;
