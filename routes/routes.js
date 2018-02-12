const express = require('express')
// const app = express()
const router = express.Router()
const mossyController = require('../controllers/mossy-controller')


// USERS Routes
router.route('/users')
  .get(mossyController.getAllUsersCtrl)
  // .post(mossyController.createUserCtrl)

router.route('/users/:id')
  .get(mossyController.getUserByIdCtrl)
  // .put(mossyController.updateUser)


// REPORTS Routes
// app.get('/reports', )
// app.get('/reports/:id', )
// app.post('/reports', )
// app.delete('/reports/:id', )


// TOYS Routes
// app.get('/toys', )
// app.get('/toys/:id', )


// FOODS Routes
// app.get('/toys', )
// app.get('/toys/:id', )


 module.exports = router
