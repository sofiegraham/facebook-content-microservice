exports.up = (knex) => { // runtime just over 1 minute;
  return knex.select('*')
    .from('users_friends')
    .then((rows) => {
      const newRows = rows.map((row) => {
        return {
          user_id: row.user_id,
          follow_id: row.friend_id,
          follow_type: 'user',
        };
      });
      return knex.batchInsert('users_follows', newRows, 1000);
    });
};

exports.down = (knex) => {
  return knex('users_follows').del();
};
