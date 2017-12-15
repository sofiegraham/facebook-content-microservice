const faker = require('faker');
faker.seed(1134);

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

randomDate(new Date(1969, 0, 1), new Date(2000, 0, 1))

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
