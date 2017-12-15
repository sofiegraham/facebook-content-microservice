const faker = require('faker');
faker.seed(1134);

const randomId = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

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
