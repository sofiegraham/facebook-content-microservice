require('dotenv').config();
require('newrelic');
const cluster = require('cluster');


if (cluster.isMaster) {
  const cpuCount = require('os').cpus().length;

  for (var i = 0; i < 10; i += 1) {
    cluster.fork();
  }

} else {
  const app = require('./app.js');

  const PORT = process.env.SERVER_PORT || 8080;

  app.listen(PORT, console.log(`now listening on port ${PORT}`)); 
}