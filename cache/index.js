const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({ port: process.env.REDIS_PORT, host: process.env.REDIS_HOST });

client.on('connect', () => {
  console.log('Redis connected');
});

module.exports = client;
