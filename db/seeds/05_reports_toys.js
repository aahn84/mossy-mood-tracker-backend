
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports_toys').del()
    .then(function () {
      // Inserts seed entries
      return knex('reports_toys').insert([
        {id: 1, reports_id: 1, toys_id: 2},
        {id: 2, reports_id: 2, toys_id: 1},
        {id: 3, reports_id: 3, toys_id: 4}
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('reports_toys_id_seq', (SELECT MAX(id) FROM reports_toys));`
      );
    });
};
