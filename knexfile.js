// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mossy_mood_tracker'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
