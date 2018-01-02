require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
const queueURL = process.env.AWS_SQS_URL;
const params = {
  AttributeNames: [
    'SentTimestamp',
  ],
  MaxNumberOfMessages: 10,
  MessageAttributeNames: [
    'All',
  ],
  QueueUrl: queueURL,
  VisibilityTimeout: 30,
  WaitTimeSeconds: 0,
};

const { Post } = require('../database/models/index.js');

const addUserPost = (message) => {
  return new Post({
    user_id: message.MessageAttributes.userId.StringValue,
    page_id: message.MessageAttributes.pageId.StringValue === '-1' ? null : message.MessageAttributes.pageId.StringValue,
    content: message.MessageAttributes.content.StringValue,
  }).save(null, { method: 'insert' })
    .then(() => {
      const deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: message.ReceiptHandle,
      };
      return deleteParams;
    })
    .catch((err) => {
      return new Error(`FAILED to write post to DB: ${err}`);
    });
};

const deleteMessageFromQueue = (deleteParams) => {
  sqs.deleteMessage(deleteParams, (error, responseData) => {
    if (error) {
      console.log('Delete Error', error);
    } else {
      console.log('Message Deleted', responseData);
    }
  });
};

const getNewPosts = () => {
  sqs.receiveMessage(params, (err, data) => {
    if (err) {
      console.log('Receive Error', err);
    } else if (data.Messages) {
      data.Messages.forEach((message) => {
        return addUserPost(message)
          .then((deleteParams) => {
            deleteMessageFromQueue(deleteParams);
          })
          .catch((error) => {
            return new Error(`FAILED to write post to DB: ${error}`);
          });
      });
    }
  });
};

setInterval(getNewPosts, 1000);



// module.exports = addUserPost;
