const knex = require('../db.js')
// var shortid = require('shortid');
//
// console.log(shortid.generate());
// //PPBqWA9

// let users = [
//   {
//     id: 1,
//     first_name: 'Angela',
//     last_name: 'Ahn'
//   },
//   {
//     id: 2,
//     first_name: 'Scott',
//     last_name: 'Hurlow'
//   },
// ]

function getAllUsers() {
  return knex('users')
  // return users;
}

function getUserById(id) {
  return knex('users')
    .where('id', id)
    .first()
  // const user = users.find(user => user.id === id)
  //
  // if (!user) {
  //   return { error: 404, message: `User with id ${id} not found.`}
  // }
  //
  // return user;
}

function createUser(first_name, last_name) {
  return knex('users')
    .insert({
      first_name,
      last_name
    })
}

// function updateUser(id) {
//
// }

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  // updateUser,

}
