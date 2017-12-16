const axios = require('axios');
const url = 'http://localhost:9000';

// axios.post(`${url}/users/5/posts`, {
//   content: 'My own stuff hahaha!',
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
//   console.log(`${url}/users/5/posts`);
// });
debugger;
axios.get(`${url}/users/5/page_likes`)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});

