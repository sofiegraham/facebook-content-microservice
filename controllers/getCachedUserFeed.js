const redis = require('../cache/index.js');
const db = require('../database/database.js');

const getCachedUserFeed = (req, res, next) => {
  redis.lrange(req.params.id, 0, -1, (err, postIds) => {
    if (err) {
      res.status(500).json(err);
    } else {
      return db.knex.schema.raw(`SELECT * FROM posts WHERE id IN (${postIds}) ORDER BY created_at DESC`)
        .then((data) => {
          req.feed = data.rows;
          next();
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    }
  });
};

module.exports = getCachedUserFeed;


// require('dotenv').config();
// const AWS = require('aws-sdk');

// AWS.config.update({ region: 'us-east-2' });

// const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

// const queueURL = process.env.AWS_SQS_URL;

// const params = {
//   AttributeNames: [
//     'SentTimestamp',
//   ],
//   MaxNumberOfMessages: 10,
//   MessageAttributeNames: [
//     'All',
//   ],
//   QueueUrl: queueURL,
//   VisibilityTimeout: 0,
//   WaitTimeSeconds: 0,
// };

// setInterval(() => {
//   sqs.receiveMessage(params, (err, data) => {
//     if (err) {
//       console.log('Receive Error', err);
//     } else if (data.Messages) {
//       data.Messages.forEach((message) => {
//         // const deleteParams = {
//         //   QueueUrl: queueURL,
//         //   ReceiptHandle: message.ReceiptHandle,
//         // };
//         return addUserPost(message)
//         // .then((postId) => {
//         //   return fanoutTrigger(postId, message.userId);
//         // })
//         .then(() => {
//           return deleteMessageFromQueue(message);
//         })
//         //addUserPost(message, deleteMessageFromQueue);
//       });
//     }
//   });
// }, 1000);

// //get messages from the Q
// //For each one
//   //write the message to the database
//   //trigger Fanout - post id and userId
//   //delete message from Q


// const deleteMessageFromQueue = (deleteParams) => {
//   return sqs.deleteMessage(deleteParams)
//     .catch((err) => {
//       console.log('Delete Error', err);
//     });
// }

// const { Post } = require('../database/models/index.js');
// const queue = require('../workers/index.js');

// const addUserPost = (message) => {
//   return new Post({
//     user_id: message.userId,
//     page_id: message.pageId,
//     content: message.content,
//   }).save(null, { method: 'insert' })
//     .then((post) => {
//       return post.attributes.id;
//       // queue.create('cacheFeedUpdate', {
//       //   title: `Feed update for ${req.params.id} followers`,
//       //   followId: req.params.id,
//       //   postId: post.attributes.id,
//       // }).save();
//      // deleteMessageFromQueue(true);
//     })
//     .catch((err) => {
//       return err;
//       //deleteMessageFromQueue(false);
//     });
// };

// module.exports = addUserPost;
