const faker = require('faker');
faker.seed(1134);

const randomId = (start, end) => {
  return Math.floor(start + Math.random() * (end - start));
};

const createFakePageLike = (firstUserId, lastUserId, firstPageId, lastPageId) => {
  return {
    user_id: randomId(firstUserId, lastUserId),
    page_id: randomId(firstPageId, lastPageId),
  };
};

module.exports = createFakePageLike;
