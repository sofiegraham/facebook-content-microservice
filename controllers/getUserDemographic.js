const { User } = require('../database/models/index.js');

const getUserDemographic = (req, res, next) => {
  return User.where({
    id: req.params.id,
  }).fetch({ columns: ['id', 'name', 'birthday', 'gender', 'relationshipStatus', 'location'] })
    .then((result) => {
      req.userDemographic = result;
      next();
    }).catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = getUserDemographic;
