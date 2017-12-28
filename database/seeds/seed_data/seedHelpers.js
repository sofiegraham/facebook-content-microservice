const faker = require('faker');

const randomId = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start;
};

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports = {
  randomId,
  randomDate,
  faker,
};
