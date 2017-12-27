const userData = [{name: 'Joe Smith', birthday: new Date(2014, 1, 1), email: 'joe@mail.com', location: 'CA'},
{name: 'Mary Klein', birthday: new Date(2001, 2, 2), email: 'mary@mail.com',location: 'WA'},
{name: 'Will Smith', birthday: new Date(1995, 8, 9), email: 'will@mail.com',location: 'FL'}];

const pageData = [{name: 'Finely tuned cats', description: 'Blaha bahaa'},
{name: 'Unicorn fans', description: 'Unicorn fans unite and discuss'}];

const pageLikesData = [{user_id: 1, page_id: 2},
{user_id: 2, page_id: 1},
{user_id: 2, page_id: 2}];

const postData = [{user_id: 1, page_id: 2, content: 'Great stuff wow!', likes: 2},
{user_id: 1, page_id: null, content: 'caboose stuff wow!'},
{user_id: 3, page_id: null, content: 'Great stuff KITCHEN!'},
{user_id: 3, page_id: null, content: 'Kettle stuff wow', likes: 1},
{user_id: 1, page_id: null, content: 'Great shark wow!'},
{user_id: 2, page_id: null, content: 'Great stuff wow!'},
{user_id: 1, page_id: 2, content: 'very groovy'},
{user_id: 2, page_id: null, content: 'Great stuff puppy'}];

const postLikesData = [{user_id: 1, post_id: 1},
{user_id: 2, post_id: 4},
{user_id: 2, post_id: 1}];

const userFriendsData = [{user_id: 1, friend_id: 2},
{user_id: 2, friend_id: 1},
{user_id: 3, friend_id: 1}];

exports.up = (knex) => {
  return knex.batchInsert('users', userData, 1000)
    .then(() => {
      return knex.batchInsert('pages', pageData, 1000);
    })
    .then(() => {
      return knex.batchInsert('pages', pageData, 1000);
    })
    .then(() => {
      return knex.batchInsert('pages_likes', pageLikesData, 1000);
    })
    .then(() => {
      return knex.batchInsert('posts', postData, 1000);
    })
    .then(() => {
      return knex.batchInsert('posts_likes', postLikesData, 1000);
    })
    .then(() => {
      return knex.batchInsert('users_friends', userFriendsData, 1000);
    })
    .then(() => {
      console.log('Done seeding db');
    });
};

exports.down = (knex) => {
  return knex('users_friends').del()
    .then(() => {
      return knex('posts_likes').del();
    })
    .then(() => {
      return knex('posts').del();
    })
    .then(() => {
      return knex('pages_likes').del();
    })
    .then(() => {
      return knex('pages').del();
    })
    .then(() => {
      return knex('users').del();
    });
};
