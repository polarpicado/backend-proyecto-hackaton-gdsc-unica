const mongoose = require('mongoose')
const { Schema } = mongoose

const VoluntarioSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  fechaNacimiento: { type: Date, required: true },
  idCarrera: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'carreras',
  },
  horarioVoluntariado: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'horarios',
  },
})

module.exports = mongoose.model('voluntarios', VoluntarioSchema)
