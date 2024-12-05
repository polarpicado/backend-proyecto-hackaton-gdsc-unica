//Import packages
const { Router } = require('express')
const RateLimit = require('express-rate-limit');

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

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
  limiter,
  // token.verify,
  voluntario.delete,
)

//Export routes
module.exports = router
