exports.up = (knex) => { // runtime just over 1 minute;
  return knex('users_follows').del().where({
    follow_type: 'user',
  }).then(() => {
    return knex.select('*')
      .from('users_friends')
      .where('id', '<=', 2000000)
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
  });
};

exports.down = (knex) => {
  return knex('users_follows').del().where({
    follow_type: 'user',
  }).then(() => {
    return knex.select('*')
      .from('users_friends')
      .where('id', '<=', 400000)
      .then((rows) => {
        const newRows = rows.map((row) => {
          return {
            user_id: row.user_id,
            follow_id: row.friend_id,
            follow_type: 'user',
          };
        });
        return knex.batchInsert('users_follows', newRows, 1000);
      })
      .then(() => {
        return knex.select('*')
          .from('users_friends')
          .where('id', '>', 400000)
          .andWhere('id', '<=', 800000)
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
      })
      .then(() => {
        return knex.select('*')
          .from('users_friends')
          .where('id', '>', 800000)
          .andWhere('id', '<=', 1200000)
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
      })
      .then(() => {
        return knex.select('*')
          .from('users_friends')
          .where('id', '>', 1200000)
          .andWhere('id', '<=', 1600000)
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
      })
      .then(() => {
        return knex.select('*')
          .from('users_friends')
          .where('id', '>', 1600000)
          .andWhere('id', '<=', 2000000)
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
      });
  });
};
