const db = require('../database/database.js');

const listColumnSchemas = (req, res) => {
  return db.knex.schema.raw('SELECT * FROM information_schema.columns')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = listColumnSchemas;
