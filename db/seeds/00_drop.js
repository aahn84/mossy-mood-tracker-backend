
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports_foods').del()
    .then(() => {
      return knex('reports_toys').del()
    })
    .then(() => {
      return knex('reports').del()
    })
    .then(() => {
      return knex('foods').del()
    })
    .then(() => {
      return knex('toys').del()
    })
    .then(() => {
      return knex('users').del()
    })
};
