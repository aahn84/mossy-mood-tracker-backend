
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('toys').del()
    .then(function () {
      // Inserts seed entries
      return knex('toys').insert([
        {id: 1, name: 'Eggplant'},
        {id: 2, name: 'Weed Ball'},
        {id: 3, name: 'Other'},
        {id: 4, name: 'None'}
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('toys_id_seq', (SELECT MAX(id) FROM toys));`
      );
    });
};
