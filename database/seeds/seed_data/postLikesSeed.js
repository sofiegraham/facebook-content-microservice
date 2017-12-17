const { randomId } = require('./seedHelpers.js');

const createFakePostLike = (firstUserId, lastUserId, firstPostId, lastPostId) => {
  return {
    user_id: randomId(firstUserId, lastUserId),
    post_id: randomId(firstPostId, lastPostId),
  };
};

module.exports = createFakePostLike;
