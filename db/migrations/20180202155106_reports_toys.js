
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reports_toys', table => {
    table.increments()
    table.integer('reports_id').notNullable()
    table.integer('toys_id').notNullable()
    table.foreign('reports_id').references('reports.id')
    table.foreign('toys_id').references('toys.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reports_toys')
};
