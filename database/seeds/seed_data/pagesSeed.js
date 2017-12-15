const faker = require('faker');
faker.seed(1134);

const createFakePage = () => {
  return {
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
  };
};

module.exports = createFakePage;
