const { randomId } = require('./seedHelpers.js');

const createFakePageLike = (firstUserId, lastUserId, firstPageId, lastPageId) => {
  return {
    user_id: randomId(firstUserId, lastUserId),
    page_id: randomId(firstPageId, lastPageId),
  };
};

module.exports = createFakePageLike;
