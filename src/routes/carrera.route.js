//Import packages
const { Router } = require('express')

//Import controllers
const carrera = require('../controllers/carrera.controller')
const token = require('../utils/token.util')

//Create instance
const router = Router()

//Define routes
router.get('/carrera', carrera.get)
router.get('/carreras', carrera.getAll)
router.post('/carrera', token.verify, carrera.post)
router.put('/carrera', token.verify, carrera.put)
router.delete('/carrera', token.verify, carrera.delete)

//Export routes
module.exports = router
