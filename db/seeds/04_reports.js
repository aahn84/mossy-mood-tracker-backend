
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports').del()
    .then(function () {
      // Inserts seed entries
      return knex('reports').insert([
        {id: 1, mood: 'indifferent', time_of_day: 'morning', users_id: 1, toys_id: 2, foods_id: 4},
        {id: 2, mood: 'happy', time_of_day: 'morning', users_id: 3, toys_id: 1, foods_id: 3},
        {id: 3, mood: 'indifferent', time_of_day: 'morning', users_id: 2, toys_id: 4, foods_id: 1},
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('reports_id_seq', (SELECT MAX(id) FROM reports));`
      );
    });
};
