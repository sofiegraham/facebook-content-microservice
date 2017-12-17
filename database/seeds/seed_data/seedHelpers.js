const faker = require('faker');

faker.seed(process.env.SERVER_PORT || 1234);

const randomId = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports = {
  randomId,
  randomDate,
  faker,
};
