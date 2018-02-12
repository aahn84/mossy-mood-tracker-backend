
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reports_foods', table => {
    table.increments()
    table.integer('reports_id').notNullable()
    table.integer('foods_id').notNullable()
    table.foreign('reports_id').references('reports.id')
    table.foreign('foods_id').references('foods.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reports_foods')
};
