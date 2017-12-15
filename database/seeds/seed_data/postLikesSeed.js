const faker = require('faker');
faker.seed(1134);

const randomId = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

const createFakePostLike = (firstUserId, lastUserId, firstPostId, lastPostId) => {
  return {
    user_id: randomId(firstUserId, lastUserId),
    post_id: randomId(firstPostId, lastPostId),
  };
};

module.exports = createFakePostLike;
