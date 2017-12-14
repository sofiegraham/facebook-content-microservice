require('dotenv').config();

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
  // migrations: { // TODO set up migration table
  //   tableName: 'migrations',
  // },
});

const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = { bookshelf, knex };
