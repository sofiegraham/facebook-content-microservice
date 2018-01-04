require('dotenv').config();
const kue = require('kue');

const queue = kue.createQueue({ redis: { port: process.env.REDIS_PORT, host: process.env.REDIS_HOST } });

queue.on('connect', () => {
  console.log('Kue connected for read API');
});

queue.on('error', (err) => {
  console.log(`FAIL Kue failed for read API with error: ${err}`);
});

module.exports = queue;
