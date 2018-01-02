exports.up = (knex) => {
  return knex.schema.raw('UPDATE posts po SET likes = (SELECT COUNT (*) FROM posts_likes pl WHERE pl.post_id = po.id )')
    .catch((err) => {
      console.log('FAILED', err);
    });
};

exports.down = (knex) => {
  return knex.schema.raw('UPDATE posts SET likes = 0')
    .catch((err) => {
      console.log('FAILED', err);
    });
};
