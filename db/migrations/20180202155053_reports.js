
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reports', table => {
    table.increments()
    table.string('mood').notNullable().defaultsTo('')
    table.string('time_of_day').notNullable().defaultsTo('')
    table.integer('users_id').notNullable()
    table.integer('toys_id').notNullable()
    table.integer('foods_id').notNullable()
    table.foreign('users_id').references('users.id')
    table.foreign('toys_id').references('toys.id')
    table.foreign('foods_id').references('foods.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reports')
};
