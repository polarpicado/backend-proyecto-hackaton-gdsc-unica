const mongoose = require('mongoose')
const { Schema } = mongoose

const HorarioSchema = new Schema({
  dias: { type: String, required: true },
  horas: { type: String, required: true },
  uid: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('horarios', HorarioSchema)
