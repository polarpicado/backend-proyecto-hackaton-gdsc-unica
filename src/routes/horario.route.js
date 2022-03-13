//Import Packages
const { Router } = require('express')

//Import controllers
const horario = require('../controllers/horario.controller')
const token = require('../utils/token.util')

//Create instance
const router = Router()

//Define routes
router.get('/horario', horario.get)
router.get('/horarios', horario.getAll)
router.post(
  '/horario',
  // token.verify,
  horario.post,
)
router.put(
  '/horario',
  //  token.verify,
  horario.put,
)
router.delete(
  '/horario',
  // token.verify,
  horario.delete,
)

//Export routes
module.exports = router
