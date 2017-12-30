const kue = require('kue');
const cacheFeedUpdate = require('./cacheFeedUpdate.js');

const queue = kue.createQueue({ jobEvents: false }); // turned off jobEvents to save memory

queue.process('cacheFeedUpdate', (job, done) => {
  cacheFeedUpdate(job.data.followId, job.data.postId, done);
});

module.exports = queue;
