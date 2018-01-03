const redis = require('redis');
require('dotenv').config();

const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

client.on('connect', () => {
  console.log('Redis connected');
});

module.exports = client;
