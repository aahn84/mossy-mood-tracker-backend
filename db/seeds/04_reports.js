
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports').del()
    .then(function () {
      // Inserts seed entries
      return knex('reports').insert([
        {id: 1, mood: 'Indifferent', time_of_day: 'Morning', users_id: 1, toys_id: 2, foods_id: 4},
        {id: 2, mood: 'Indifferent', time_of_day: 'Morning', users_id: 3, toys_id: 1, foods_id: 3},
        {id: 3, mood: 'Happy', time_of_day: 'Afternoon', users_id: 2, toys_id: 4, foods_id: 1},
        {id: 4, mood: 'Sassy', time_of_day: 'Afternoon', users_id: 2, toys_id: 4, foods_id: 2},
        {id: 5, mood: 'Happy', time_of_day: 'Morning', users_id: 1, toys_id: 4, foods_id: 4},
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('reports_id_seq', (SELECT MAX(id) FROM reports));`
      );
    });
};
