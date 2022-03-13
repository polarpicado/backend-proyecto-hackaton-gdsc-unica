// Import packages
const { Router } = require('express')

// Import controllers
const estudiante = require('../controllers/estudiante.controller')
const token = require('../utils/token.util')

// Create instance
const router = Router()

// Define routes
router.get('/estudiante', estudiante.get)
router.get('/estudiantes', estudiante.getAll)
router.post('/estudiante', token.verify, estudiante.post)
router.put('/estudiante', token.verify, estudiante.put)
router.delete('/estudiante', token.verify, estudiante.delete)

// Export routes
module.exports = router
