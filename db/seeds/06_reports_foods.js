
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports_foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('reports_foods').insert([
        {id: 1, reports_id: 1, foods_id: 4},
        {id: 2, reports_id: 1, foods_id: 3},
        {id: 3, reports_id: 1, foods_id: 1}
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('reports_foods_id_seq', (SELECT MAX(id) FROM reports_foods));`
      );
    });
};
