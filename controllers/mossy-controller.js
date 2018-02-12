const mossyModel = require('../models/mossy-model')

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

// const updateUserCtrl = (req, res, next) => {
//
// }

module.exports = {
  getAllUsersCtrl,
  getUserByIdCtrl,
  createUserCtrl,
  // updateUserCtrl,
  
}
