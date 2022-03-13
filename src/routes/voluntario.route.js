//Import packages
const { Router } = require('express')

//Import controllers
const voluntario = require('../controllers/voluntario.controller')
const token = require('../utils/token.util')

//Create instance
const router = Router()

//Define routes
router.get('/voluntario', voluntario.get)
router.get('/voluntarios', voluntario.getAll)
router.post(
  '/voluntario',
  // token.verify,
  voluntario.post,
)
router.put(
  '/voluntario',
  // token.verify,
  voluntario.put,
)
router.delete(
  '/voluntario',
  // token.verify,
  voluntario.delete,
)

//Export routes
module.exports = router
