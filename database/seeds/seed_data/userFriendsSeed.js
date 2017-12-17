const { randomId } = require('./seedHelpers.js');

const createFakeUserFriend = (firstUserId, lastUserId) => {
  let userId = 1;
  let friendId = 1;

  while (userId === friendId) {
    userId = randomId(firstUserId, lastUserId);
    friendId = randomId(firstUserId, lastUserId);
  }

  return {
    user_id: userId,
    friend_id: friendId,
  };
};

module.exports = createFakeUserFriend;
