const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: process.env.POSTGRES_PORT || '5432',
    user: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'null',
    database: process.env.POSTGRES_DATABASE || 'content',
    charset: 'utf8',
  },
});

const bookshelfDb = require('bookshelf')(knex);

module.exports = bookshelfDb;
