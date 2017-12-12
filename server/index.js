const app = require('./app.js');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`now listening on port ${PORT}`));