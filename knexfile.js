// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: process.env.DB_URL || 'postgres://localhost/mossy_mood_tracker_dev'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
