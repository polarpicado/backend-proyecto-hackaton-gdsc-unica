const { initializeApp } = require('firebase-admin/app')
const { getAuth } = require('firebase-admin/auth')

const firebase = {}

const firebaseConfig = {
  apiKey: 'AIzaSyCJ-S62pc-tROXDGBHrZhDX16CuHovJHAY',
  authDomain: 'auth-b86ed.firebaseapp.com',
  projectId: 'auth-b86ed',
  storageBucket: 'auth-b86ed.appspot.com',
  messagingSenderId: '111035842895',
  appId: '1:111035842895:web:d6cf7401ee52c6802f853a',
  measurementId: 'G-SLMC6K5L5H',
}

firebase.app = initializeApp(firebaseConfig)
firebase.auth = getAuth()

module.exports = firebase
