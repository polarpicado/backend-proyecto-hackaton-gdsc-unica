const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

require('./utils/database.util')

app.set('Port', 4000)

app.use(morgan('dev'))
app.use(bodyParser.json())

//Rutas
app.use('/api/', require('./routes/voluntario.route'))
app.use('/api/', require('./routes/estudiante.route'))
app.use('/api/', require('./routes/carrera.route'))
//start server

app.listen(app.get('Port'), () => {
  console.log('Servidor en el puerto ' + app.get('Port'))
})
