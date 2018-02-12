
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'Bacon'},
        {id: 2, name: 'Dog Treats'},
        {id: 3, name: 'Other'},
        {id: 4, name: 'None'}
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('foods_id_seq', (SELECT MAX(id) FROM foods));`
      );
    });
};
