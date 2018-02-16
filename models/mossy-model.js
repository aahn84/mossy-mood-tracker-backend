const knex = require('../db.js')

// USERS
function getAllUsers() {
  return knex('users')
}

function getUserById(id) {
  return knex('users')
    .where('id', id)
    .first()
}

function createUser(newUser) {
  return knex('users')
    .insert(newUser).returning('id');
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


// REPORTS
function getAllReports() {
  return knex('reports')
  .join('users', 'users.id', '=', 'reports.users_id')
  .join('toys', 'toys.id', '=', 'reports.toys_id')
  .join('foods', 'foods.id', '=', 'reports.foods_id')
  .select('users.id as user_id', 'first_name', 'last_name', 'time_of_day', 'mood', 'toys.name as toys_id', 'foods.name as foods_id', 'reports.created_at');
}

// function getReportById(id) {
//   return knex('reports')
//     .where('id', id)
//     .first()
// }

function getReportByUserId(testUser) {
  console.log(testUser)
  return knex('users')
    .where('first_name', testUser.first_name)
    .andWhere('last_name', testUser.last_name)
    .select('users.id').first()
    .then(result => {
      return knex('reports')
        .where('users_id', result.id)
    })
}

let testUser = {
  first_name: "Angela",
  last_name: "Ahn",
}

function createReport(newReport) {
  if (newReport.users_id) {
    return knex('reports').insert(newReport).returning('*');
  } else {
    return knex('users').where('first_name', newReport.firstName)
      .andWhere('last_name', newReport.lastName).select('users.id').first()
      .then(result => {
        if (result) {
          let { mood, time_of_day, toys_id, foods_id } = newReport
          let updatedReport = { users_id: result.id, mood, time_of_day, toys_id, foods_id } ;
          return createReport(updatedReport);
        } else {
          let userToCreate = {
            first_name: newReport.firstName,
            last_name: newReport.lastName
          };
          return createUser(userToCreate).then(result => {
            let { mood, time_of_day, toys_id, foods_id } = newReport;
            let updatedReport = { users_id: result[0], mood, time_of_day, toys_id, foods_id };
            return createReport(updatedReport);
          });
        }
      })
  }
}

// REPORTS_TOYS
function getReportsToys() {
  return knex('reports_toys')
}


// REPORTS_FOODS
function getReportsFoods() {
  return knex('reports_foods')
}

// AVERAGE MOODS
function getAverageMoods() {
  return knex('reports')
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  getAllToys,
  getToyById,
  getAllFoods,
  getFoodById,
  getAllReports,
  // getReportById,
  getReportByUserId,
  createReport,
  getReportsToys,
  getReportsFoods,
  getAverageMoods,
}
