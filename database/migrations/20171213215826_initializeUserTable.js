exports.up = knex => (
  knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.date('birthday').notNullable();
      table.string('email').notNullable();
      table.string('location').notNullable();
      table.string('gender').defaultTo('non binary');
      table.string('relationshipStatus').defaultTo('single');
      table.timestamps(true, true);      
    })
    .createTable('pages', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description').defaultTo('');
      table.timestamps(true, true);
    })
    .createTable('pageLikes', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('page_id').references('pages.id');
      table.timestamps(true, true);
    })
    .createTable('posts', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('page_id').references('pages.id').defaultTo(null);
      table.text('content').defaultTo('');
      table.integer('likes').defaultTo(0);
      table.timestamps(true, true);
    })
    .createTable('postLikes', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('post_id').references('posts.id');
      table.timestamps(true, true);
    })
    .createTable('userFriends', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('friend_id').references('users.id');
      table.timestamps(true, true);
    })
);

exports.down = knex => (
  knex.schema
    .dropTable('userFriends')
    .dropTable('postLikes')
    .dropTable('posts')
    .dropTable('pageLikes')
    .dropTable('pages')
    .dropTable('users')
);
