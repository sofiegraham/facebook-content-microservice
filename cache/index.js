const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({ port: process.env.REDIS_PORT, host: 'redis' });

client.on('connect', () => {
  console.log('Redis connected');
});

module.exports = client;
