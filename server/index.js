require('dotenv').config();
require('newrelic');
const app = require('./routes.js');
const cluster = require('cluster');

if (cluster.isMaster) {
  const cpuCount = require('os').cpus().length;

  for (let i = 0; i < cpuCount * 2; i += 1) {
    cluster.fork();
  }
} else {

  const PORT = process.env.SERVER_PORT || 8080;

  app.listen(PORT, console.log(`now listening on port ${PORT}`));
}
