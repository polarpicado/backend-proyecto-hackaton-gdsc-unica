const mongoose = require('mongoose')
const { Schema } = mongoose

const CarreraSchema = new Schema({
  nombre: { type: String, required: true },
  descripcionCorta: { type: String, required: true },
  descripcionLarga: { type: String, required: true },
  urlImagen: { type: String, required: true },
  uid: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('carreras', CarreraSchema)
