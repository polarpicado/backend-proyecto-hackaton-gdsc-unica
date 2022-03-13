const { default: mongoose } = require('mongoose')
const Voluntario = require('../models/voluntario.model')
const voluntarioController = {}

//GET DE TODOS
voluntarioController.getAll = async (req, res) => {
  try {
    const voluntario = await Voluntario.find({ status: 'active' })
    if (voluntario.length === 0) {
      res.status(404).json({
        message: 'No se encontró ningún voluntario activo.',
      })
      return
    }
    res.status(200).json(voluntario)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//GET POR ID
voluntarioController.get = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró el voluntario.',
    })
  } else {
    try {
      const voluntario = await Voluntario.findById({ _id: id })
      res.status(200).json(voluntario)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//POST
voluntarioController.post = async (req, res) => {
  const {
    nombre,
    apellido,
    email,
    telefono,
    uid,
    fechaNacimiento,
    idCarrera,
    horarioVoluntariado,
  } = req.body
  try {
    const voluntario = new Voluntario({
      nombre,
      apellido,
      email,
      telefono,
      uid,
      fechaNacimiento,
      idCarrera,
      horarioVoluntariado,
    })
    voluntario.save()
    res.status(200).json(voluntario)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//PUT
voluntarioController.put = async (req, res) => {
  const id = req.query.id
  const {
    nuevoNombre,
    nuevoApellido,
    nuevoEmail,
    nuevoTelefono,
    nuevoUid,
    nuevoFechaDeNacimiento,
    nuevoIdCarrera,
    nuevoHorarioVoluntariado,
  } = req.body
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró el voluntario.',
    })
  } else {
    try {
      const voluntario = await Voluntario.findByIdAndUpdate(id, {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        email: nuevoEmail,
        telefono: nuevoTelefono,
        uid: nuevoUid,
        fechaNacimiento: nuevoFechaDeNacimiento,
        idCarrera: mongoose.Schema.Types.ObjectId(nuevoIdCarrera),
        horarioVoluntariado: mongoose.Schema.Types.ObjectId(
          nuevoHorarioVoluntariado,
        ),
      })
      res.status(200).json(voluntario)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//DELETE
voluntarioController.delete = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró el voluntario.',
    })
  } else {
    try {
      const voluntario = await Voluntario.findByIdAndDelete(id)
      res.status(200).json(voluntario)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

module.exports = voluntarioController
