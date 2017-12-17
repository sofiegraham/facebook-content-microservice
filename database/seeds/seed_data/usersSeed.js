const { randomDate, faker } = require('./seedHelpers.js');

const createFakeUser = () => {
  return {
    name: faker.name.findName(),
    birthday: randomDate(new Date(1969, 0, 1), new Date(2000, 0, 1)),
    gender: Math.random() < 0.5 ? 'female' : 'male',
    relationshipStatus: Math.random() < 0.5 ? 'single' : 'married',
    email: faker.internet.email(),
    location: faker.address.stateAbbr(),
  };
};

module.exports = createFakeUser;
