const mossyModel = require('../models/mossy-model')

// USERS
const getAllUsersCtrl = (req, res, next) => {
  mossyModel.getAllUsers()
    .then(users => {
      res.json(users)
      // res.status(200).json({data: users})
    })
    .catch(err => next(err))
}

const getUserByIdCtrl = (req, res, next) => {
  const id = req.params.id

  mossyModel.getUserById(id)
    .then(user => {
      res.json(user)
      // res.status(200).json({data: user})
    })
    .catch(err => next(err))
}

const createUserCtrl = (req, res, next) => {
  let {first_name, last_name} = req.body

  mossyModel.createUser(first_name, last_name)
  .then(user => {
    res.json(user)
  })
  .catch(err => next(err))
}


// REPORTS
const getAllReportsCtrl = (req, res, next) => {
  mossyModel.getAllReports()
    .then(reports => {
      res.json(reports)
    })
    .catch(err => next(err))
}

const getReportByIdCtrl = (req, res, next) => {
  const id = req.params.id

  mossyModel.getReportById(id)
    .then(report => {
      res.json(report)
    })
    .catch(err => next(err))
}

const createReportCtrl = (req, res, next) => {
  let {mood, time_of_day, users_id, toys_id, foods_id} = req.body

  mossyModel.createReport(mood, time_of_day, users_id, toys_id, foods_id)
  .then(report => {
    res.json(report)
  })
  .catch(err => next(err))
}


// TOYS
const getAllToysCtrl = (req, res, next) => {
  mossyModel.getAllToys()
    .then(toys => {
      res.json(toys)
    })
    .catch(err => next(err))
}

const getToyByIdCtrl = (req, res, next) => {
  const id = req.params.id

  mossyModel.getToyById(id)
    .then(toy => {
      res.json(toy)
    })
    .catch(err => next(err))
}

// FOODS
const getAllFoodsCtrl = (req, res, next) => {
  mossyModel.getAllFoods()
    .then(foods => {
      res.json(foods)
    })
    .catch(err => next(err))
}

const getFoodByIdCtrl = (req, res, next) => {
  const id = req.params.id

  mossyModel.getToyById(id)
    .then(food => {
      res.json(food)
    })
    .catch(err => next(err))
}


module.exports = {
  getAllUsersCtrl,
  getUserByIdCtrl,
  createUserCtrl,
  getAllReportsCtrl,
  getReportByIdCtrl,
  createReportCtrl,
  getAllToysCtrl,
  getToyByIdCtrl,
  getAllFoodsCtrl,
  getFoodByIdCtrl,
}
