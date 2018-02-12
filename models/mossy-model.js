const knex = require('../db.js')

// USERS
function getAllUsers() {
  return knex('users')
  // return users;
}

function getUserById(id) {
  return knex('users')
    .where('id', id)
    .first()
}

function createUser(first_name, last_name) {
  return knex('users')
    .insert({
      first_name,
      last_name
    })
}


// REPORTS
function getAllReports() {
  return knex('reports')
}

function getReportById(id) {
  return knex('reports')
    .where('id', id)
    .first()
}

function createReport(mood, time_of_day, users_id, toys_id, foods_id) {
  return knex('reports')
    .insert({
      mood,
      time_of_day,
      users_id,
      toys_id,
      foods_id
    })
}


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
function getAllFoods() {
  return knex('foods')
}

function getFoodById(id) {
  return knex('foods')
    .where('id', id)
    .first()
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  getAllReports,
  getReportById,
  createReport,
  getAllToys,
  getToyById,
  getAllFoods,
  getFoodById,
}
