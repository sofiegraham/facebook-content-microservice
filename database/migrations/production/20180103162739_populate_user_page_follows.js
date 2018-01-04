exports.up = (knex) => { // runtime just over 1 minute;
  return knex.select('*')
    .from('pages_likes')
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
};

exports.down = (knex) => {
  return knex('users_follows').del().where({
    follow_type: 'page',
  });
};
