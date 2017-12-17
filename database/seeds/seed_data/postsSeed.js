const { randomId, faker } = require('./seedHelpers.js');

const createFakePost = (firstUserId, lastUserId, firstPageId, lastPageId) => {
  return {
    user_id: randomId(firstUserId, lastUserId),
    page_id: Math.random() < 0.8 ? null : randomId(firstPageId, lastPageId),
    content: faker.lorem.sentences(),
  };
};

module.exports = createFakePost;
