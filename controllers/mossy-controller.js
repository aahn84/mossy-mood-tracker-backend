const mossyModel = require('../models/mossy-model')

const getAllUsersCtrl = (req, res, next) => {
  const users = mossyModel.getAllUsers()

  res.status(200).json({data: users})
}

const getUserByIdCtrl = (req, res, next) => {
  const id = req.params.id

  if (!id) return next({status: 400, message: `Please provide a user ID`})

  const user = mossyModel.getUserById(id)

  if (user.error) {
    let { error, message } = user;
    return res.status(error).json({ error: { message }})
  }

  res.status(200).json({data: user})
}

// const createUserCtrl = (req, res, next) => {
//
// }

// const updateUserCtrl = (req, res, next) => {
//
// }

module.exports = {
  getAllUsersCtrl,
  getUserByIdCtrl,
  // createUserCtrl,
  // updateUserCtrl,
  //
}
