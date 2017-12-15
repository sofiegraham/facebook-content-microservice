const axios = require('axios');
const url = 'http://localhost:9000';

axios.post(`${url}/users/5/posts`, {
  page_id: 10,
  content: 'Great hahaha!',
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
  console.log(`${url}/users/5/posts`);
});
