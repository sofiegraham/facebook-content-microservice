const db = require('../database/database.js');

// const getUserFeed = (req, res, next) => {
//   return db.knex.schema.raw(`SELECT COUNT (*) FROM posts WHERE (user_id IN (SELECT friend_id FROM users_friends WHERE user_id = ${req.params.id}) AND page_id = null) OR (page_id IN (SELECT page_id FROM pages_likes WHERE user_id = ${req.params.id}))`)
//     .then((data) => {
//       req.feed = data.rows;
//       next();
//     }).catch((err) => {
//       res.status(500).end(err);
//     });
// };

// const getUserFeed = (req, res, next) => {
//   return db.knex.schema.raw(`WITH followers AS (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) SELECT * FROM posts WHERE (user_id IN (SELECT follow_id FROM followers) AND page_id IS NULL) OR  (page_id IN (SELECT follow_id FROM followers));`)
//     .then((data) => {
//       req.feed = data.rows;
//       next();
//     }).catch((err) => {
//       res.status(500).end(err);
//     });
// };

const getUserFeed = (req, res, next) => {
  return db.knex.schema.raw(`SELECT * FROM posts WHERE user_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) AND page_id IS NULL UNION SELECT * FROM posts WHERE page_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id})`)
    .then((data) => {
      req.feed = data.rows;
      next();
    }).catch((err) => {
      res.status(500).end(err);
    });
};

module.exports = getUserFeed;

// SELECT COUNT (*) FROM posts WHERE (user_id IN (SELECT friend_id FROM users_friends WHERE user_id = 3) AND page_id = null) OR (page_id IN (SELECT page_id FROM pages_likes WHERE user_id = 3));

// WITH followers AS (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) SELECT * FROM posts WHERE (user_id IN (SELECT follow_id FROM followers) AND page_id = null) OR  (page_id IN (SELECT follow_id FROM followers));

// SELECT (*) FROM posts WHERE user_id = 2 AND page_id = null;

// SELECT * FROM posts WHERE user_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) AND page_id IS NULL UNION SELECT * FROM posts WHERE page_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id});

// SELECT * FROM posts WHERE user_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}) AND page_id IS NULL UNION SELECT * FROM posts WHERE page_id IN (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id})

// WHERE (user_id, page_id) IN ( (SELECT follow_id FROM users_follows WHERE user_id = ${req.params.id}), (NULL) );



const numberOfIslands = (arrayOfLand) => {
  //catcch empty array
  const visited = {};
  let countOfIslands = 1;

  for(let y = 0; y < arrayOfLand.length; y++) {
    for(let x = 0; x < arrayOfLand[0].length; x++) {
      if(arrayOfLand[y[x]] === 1) {
        if(!visited[`${y},${x}`]) {
          countOfIslands ++;
          floodFill(y, x);
        }
      }
  }
  return countOfIslands;
}

const floodFill = (y, x) => {
  visited[`${y},${x}`] = true;
  if(arrayOfLand[y[x + 1]] === 1) {
    floodFill(y, x + 1);
  }
  if(arrayOfLand[y + 1[x]] === 1) {
    floodFill(y + 1, x);
  }
  return;
}