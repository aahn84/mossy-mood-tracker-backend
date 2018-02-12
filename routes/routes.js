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
router.route('/reports')
  .get(mossyController.getAllReportsCtrl)
  .post(mossyController.createReportCtrl)

router.route('/reports/:id')
  .get(mossyController.getReportByIdCtrl)


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
