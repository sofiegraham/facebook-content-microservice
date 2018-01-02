exports.up = (knex) => {
  return knex.select('*')
    .from('users_friends')
    .where('id', '>', 2000000)
    .andWhere('id', '<=', 4000000)
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
  return knex.schema.raw('DELETE FROM users_follows WHERE id IN (SELECT id FROM users_follows ORDER BY id DESC LIMIT 2000000')
    .catch((err) => {
      console.log('FAILED', err);
    });
};
