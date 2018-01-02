const kue = require('kue');
const cluster = require('cluster');
const cacheFeedUpdate = require('./cacheFeedUpdate.js');

const queue = kue.createQueue({ jobEvents: false }); // turned off jobEvents to save memory
queue.watchStuckJobs(5000);


queue.process('cacheFeedUpdate', (job, done) => {
  cacheFeedUpdate(job.data.followId, job.data.postId, done);
});


// if (cluster.isMaster) {
//   kue.app.listen(3000);
//   for (let i = 0; i < 4; i++) {
//     cluster.fork();
//   }
// } else {
//   queue.process('cacheFeedUpdate', (job, done) => {
//     cacheFeedUpdate(job.data.followId, job.data.postId, done);
//   });
// }

module.exports = queue;