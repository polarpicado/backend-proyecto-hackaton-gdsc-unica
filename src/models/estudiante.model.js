const mongoose = require('mongoose')
const { Schema } = mongoose

const EstudianteSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true, unique: true },
  fechaNacimiento: { type: Date, required: true },
  uid: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('estudiantes', EstudianteSchema)
