require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'content',
      user: process.env.POSTGRES_USER || 'root',
      password: process.env.POSTGRES_PASSWORD || 'null',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds/',
    },
  },
};