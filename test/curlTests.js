require('dotenv').config();
const axios = require('axios');

const url = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

// TEST POST USER POST
// axios.post(`${url}/users/33/posts`, {
//   content: 'PUPPIES ARE GREAT',
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
//   console.log(`${url}/users/5/posts`);
// });

// TEST POST POST LIKES
// axios.post(`${url}/posts/17542652/likes`, {
//     user_id: 22,
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//     console.log(`${url}/posts/17542652/likes`);
//   });

// TEST POST PAGE LIKES
// axios.post(`${url}/pages/100/likes`, {
//   user_id: 22,
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
//   console.log(`${url}/pages/100/likes`);
// });

// TEST GET USER FEED
// axios.get(`${url}/users/6252/feed`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });

// TEST GET USER PAGE LIKES
// axios.get(`${url}/users/255/page_likes`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });

// TEST GET USER DEMOGRAPHIC
// axios.get(`${url}/users/722/demographic`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });

// TEST GET LITSCOLUMNSCHEMA
// axios.get(`${url}/listtables`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });
