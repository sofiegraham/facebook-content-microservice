const { faker } = require('./seedHelpers.js');

const createFakePage = () => {
  return {
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
  };
};

module.exports = createFakePage;
