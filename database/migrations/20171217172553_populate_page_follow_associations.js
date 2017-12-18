exports.up = (knex) => { // runtime just over 1 minute;
  return knex.select('*')
    .from('pages_likes')
    .where('id', '<=', 400000)
    .then((rows) => {
      const newRows = rows.map((row) => {
        return {
          user_id: row.user_id,
          follow_id: row.page_id,
          follow_type: 'page',
        };
      });
      return knex.batchInsert('users_follows', newRows, 1000);
    })
    .then(() => {
      return knex.select('*')
        .from('pages_likes')
        .where('id', '>', 400000)
        .andWhere('id', '<=', 800000)
        .then((rows) => {
          const newRows = rows.map((row) => {
            return {
              user_id: row.user_id,
              follow_id: row.page_id,
              follow_type: 'page',
            };
          });
          return knex.batchInsert('users_follows', newRows, 1000);
        });
    })
    .then(() => {
      return knex.select('*')
        .from('pages_likes')
        .where('id', '>', 800000)
        .then((rows) => {
          const newRows = rows.map((row) => {
            return {
              user_id: row.user_id,
              follow_id: row.page_id,
              follow_type: 'page',
            };
          });
          return knex.batchInsert('users_follows', newRows, 1000);
        });
    });
};

exports.down = (knex) => {
  knex('users_follows').del().where({
    follow_type: 'page',
  });
};
