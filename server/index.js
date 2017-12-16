const apm = require('elastic-apm-node').start({
  // Required app name (allowed characters:a-z, A-Z, 0-9, -, _, and space)
  appName: 'content-microservice',
  // Use if APM Server requires a token
  //secretToken: '',
  // Set custom APM Server URL (default: http://localhost:8200)
  //serverUrl: ''
});

const app = require('./app.js');
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, console.log(`now listening on port ${PORT}`));
