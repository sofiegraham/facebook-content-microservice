require('dotenv').config();
const axios = require('axios');

const url = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;

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

// TEST POST LIKES
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

// TEST PAGE LIKES
axios.post(`${url}/pages/100/likes`, {
  user_id: 22,
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
  console.log(`${url}/pages/100/likes`);
});

// axios.get(`${url}/users/4000/page_likes`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });


// axios.get(`${url}/users/5000/page_likes`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });


// axios.get(`${url}/users/3/feed`)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });
