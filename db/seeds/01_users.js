
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Angela', last_name: 'Ahn'},
        {id: 2, first_name: 'Amalia', last_name: 'Fergin'},
        {id: 3, first_name: 'Charlie', last_name: 'Crawford'}
      ]);
    })
    .then(function () {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    });
};
