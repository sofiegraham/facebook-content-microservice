const queue = require('../queue/index.js');

const queueCacheFanout = (req, post) => {
  queue.create('cacheFeedUpdate', {
    title: `Feed update for ${req.params.id} followers`,
    followId: req.params.id,
    postId: post.attributes.id,
  }).save((err) => {
    if (err) {
      console.log(`ERROR: Cache fanout failed for post ${post.attributes.id}: ${err}`);
    }
  });
};

module.exports = queueCacheFanout;