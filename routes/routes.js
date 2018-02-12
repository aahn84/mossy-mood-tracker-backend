const express = require('express')
// const app = express()
const router = express.Router()
const mossyController = require('../controllers/mossy-controller')


// USERS
router.route('/users')
  .get(mossyController.getAllUsersCtrl)
  .post(mossyController.createUserCtrl)

router.route('/users/:id')
  .get(mossyController.getUserByIdCtrl)
  // .put(mossyController.updateUserCtrl)


// REPORTS
router.route('/reports')
  .get(mossyController.getAllReportsCtrl)
  .post(mossyController.createReportCtrl)

router.route('/reports/:id')
  .get(mossyController.getReportByIdCtrl)


// TOYS
router.route('/toys')
  .get(mossyController.getAllToysCtrl)

router.route('/toys/:id')
  .get(mossyController.getToyByIdCtrl)


// FOODS
router.route('/foods')
  .get(mossyController.getAllFoodsCtrl)

router.route('/foods/:id')
  .get(mossyController.getFoodByIdCtrl)


module.exports = router
