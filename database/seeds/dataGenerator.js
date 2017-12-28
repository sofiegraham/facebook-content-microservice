require('dotenv').config();
const fs = require('fs');
const createFakeUser = require('./seed_data/usersSeed.js');
const createFakePage = require('./seed_data/pagesSeed.js');
const createFakePageLikes = require('./seed_data/pageLikesSeed.js');
const createFakePosts = require('./seed_data/postsSeed.js');
const createFakePostLikes = require('./seed_data/postLikesSeed.js');
const createFakeUserFriends = require('./seed_data/userFriendsSeed.js');

const USER_COUNT = process.env.SEED_USER_COUNT;
const PAGE_COUNT = process.env.SEED_PAGE_COUNT;
const PAGE_LIKE_COUNT = process.env.SEED_PAGE_LIKE_COUNT;
const POST_COUNT = process.env.SEED_POST_COUNT;
const POST_LIKE_COUNT = process.env.SEED_POST_LIKE_COUNT;
const USER_FRIEND_COUNT = process.env.SEED_USER_FRIEND_COUNT;

const generateAndWriteDataToFile = (fileNameString, numberOfRecords, fakeDataFunction, ...fakeDataArgs) => {
  fs.appendFileSync(fileNameString, 'module.exports = [');
  for (let i = 0; i < numberOfRecords - 1; i++) {
    fs.appendFileSync(fileNameString, `${JSON.stringify(fakeDataFunction(...fakeDataArgs))},`);
  }
  fs.appendFileSync(fileNameString, JSON.stringify(fakeDataFunction(...fakeDataArgs)));
  fs.appendFileSync(fileNameString, '];');
}

const startTime = Date.now();

generateAndWriteDataToFile('./usersData.js', USER_COUNT, createFakeUser);
console.log('Finished writing user data. Total seconds:', (Date.now() - startTime) / 1000);

generateAndWriteDataToFile('./pagesData.js', PAGE_COUNT, createFakePage);
console.log('Finished writing page data. Total seconds:', (Date.now() - startTime) / 1000);

generateAndWriteDataToFile('./pagesLikesData.js', PAGE_LIKE_COUNT, createFakePageLikes, 1, USER_COUNT, 1, PAGE_COUNT);
console.log('Finished writing pageLike data. Total seconds:', (Date.now() - startTime) / 1000);

const postLoops = POST_COUNT / 1000000;
const postsPerLoop = POST_COUNT / postLoops;
for (let i = 0; i < postLoops; i += 1) {
  generateAndWriteDataToFile(`./postsData${i + 1}.js`, postsPerLoop, createFakePosts, 1, USER_COUNT, 1, PAGE_COUNT);
  console.log(`Finished writing ${i + 1}/${postLoops} ${postsPerLoop} postLike objects. Total seconds:`, (Date.now() - startTime) / 1000);
}

generateAndWriteDataToFile('./postLikesData.js', POST_LIKE_COUNT, createFakePostLikes, 1, USER_COUNT, 1, POST_COUNT);
console.log(`Finished writing ${POST_LIKE_COUNT} postLike objects. Total seconds:`, (Date.now() - startTime) / 1000);

generateAndWriteDataToFile('./userFriendsData.js', USER_FRIEND_COUNT, createFakeUserFriends, 1, USER_COUNT);
console.log('Finished writing userFriend objects. Total seconds:', (Date.now() - startTime) / 1000);

