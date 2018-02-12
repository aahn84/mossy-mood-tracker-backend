const express = require('express')
// const app = express()
const router = express.Router()
const mossyController = require('../controllers/mossy-controller')


// USERS Routes
router.route('/users')
  .get(mossyController.getAllUsersCtrl)
  .post(mossyController.createUserCtrl)

router.route('/users/:id')
  .get(mossyController.getUserByIdCtrl)
  // .put(mossyController.updateUserCtrl)


// REPORTS Routes
// app.get('/reports', )
// app.get('/reports/:id', )
// app.post('/reports', )
// app.delete('/reports/:id', )


// TOYS Routes
router.route('/toys')
  .get(mossyController.getAllToysCtrl)

router.route('/toys/:id')
  .get(mossyController.getToyByIdCtrl)


// FOODS Routes
router.route('/foods')
  .get(mossyController.getAllFoodsCtrl)

router.route('/foods/:id')
  .get(mossyController.getFoodByIdCtrl)


 module.exports = router
