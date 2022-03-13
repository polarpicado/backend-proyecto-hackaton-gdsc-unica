const firebase = require('./firebase.util')

require('dotenv').config()

const token = {}

token.getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1]
  } else {
    req.authToken = null
  }
  next()
}

token.verify = async (req, res, next) => {
  token.getAuthToken(req, res, async () => {
    try {
      const { authToken } = req
      const userInfo = await firebase.auth.verifyIdToken(authToken)
      req.authId = userInfo.uid
      return next()
    } catch (e) {
      console.log(e)
      return res.status(401).send({ error: 'Not authenticated' })
    }
  })
}

module.exports = token
