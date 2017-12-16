const app = require('./app.js');
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, console.log(`now listening on port ${PORT}`));
