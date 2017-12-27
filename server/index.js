require('dotenv').config();
require('newrelic');
//const cluster = require('cluster');


// if (cluster.isMaster) {
//   const cpuCount = require('os').cpus().length;

//   for (let i = 0; i < cpuCount; i += 1) {
//     cluster.fork();
//   }
// } else {
  const app = require('./app.js');

  const PORT = process.env.SERVER_PORT || 8080;

  app.listen(PORT, console.log(`now listening on port ${PORT}`));
// }

