// var shortid = require('shortid');
//
// console.log(shortid.generate());
// //PPBqWA9

const knex = require('../db.js')

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
  // return users;
  return knex('users')
}

function getUserById(id) {
  // const user = users.find(user => user.id === id)
  //
  // if (!user) {
  //   return { error: 404, message: `User with id ${id} not found.`}
  // }
  //
  // return user;
}

// function createUser() {
//
// }

// function updateUser(id) {
//
// }

module.exports = {
  getAllUsers,
  getUserById,
  // createUser,
  // updateUser,

}
