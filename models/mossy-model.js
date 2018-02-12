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

// USERS
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

// REPORTS



// TOYS
function getAllToys() {
  return knex('toys')
}

function getToyById(id) {
  return knex('toys')
    .where('id', id)
    .first()
}

// FOODS




module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  // updateUser,

  getAllToys,
  getToyById,

}
