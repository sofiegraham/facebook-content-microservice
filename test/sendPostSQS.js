require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const params = {
  DelaySeconds: 0,
  MessageAttributes: {
    msgType: {
      DataType: 'String',
      StringValue: 'post',
    },
    userId: {
      DataType: 'Number',
      StringValue: '55',
    },
    pageId: {
      DataType: 'Number',
      StringValue: '-1',
    },
    content: {
      DataType: 'String',
      StringValue: 'This was a post made through SQS',
    }
 },
 MessageBody: "An SQS post",
 QueueUrl: process.env.AWS_SQS_URL
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});