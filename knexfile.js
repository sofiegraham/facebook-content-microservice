require('dotenv').config();

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       database: 'content',
//       user: process.env.POSTGRES_USER || 'root',
//       password: process.env.POSTGRES_PASSWORD || 'null',
//     },
//     migrations: {
//       directory: './database/migrations',
//     },
//     seeds: {
//       directory: './database/seeds/',
//     },
//     debug: true,
//   },
// };

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
    },
    migrations: {
      directory: './database/migrations',
    },
    debug: true,
  },
};

