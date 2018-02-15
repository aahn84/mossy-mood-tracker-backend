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


// REPORTS
router.route('/reports')
  .get(mossyController.getAllReportsCtrl)
  .post(mossyController.createReportCtrl)

router.route('/reports/:id')
  .get(mossyController.getReportByIdCtrl)


// REPORTS_TOYS
router.route('/reports-toys')
  .get(mossyController.getReportsToysCtrl)


// REPORTS_FOODS
router.route('/reports-foods')
  .get(mossyController.getReportsFoodsCtrl)

module.exports = router
