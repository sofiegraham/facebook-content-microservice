require('dotenv').config();
require('newrelic');

const app = require('./app.js');


const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, console.log(`now listening on port ${PORT}`));
