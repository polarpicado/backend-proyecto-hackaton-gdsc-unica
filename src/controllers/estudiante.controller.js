const Estudiante = require('../models/estudiante.model')
const estudianteController = {}

//GET DE TODOS
estudianteController.getAll = async (req, res) => {
  try {
    const estudiante = await Estudiante.find({ status: 'active' })
    if (estudiante.length === 0) {
      res.status(404).json({
        message: 'No se encontró ningún estudiante activo.',
      })
      return
    }
    res.status(200).json(estudiante)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//GET POR ID
estudianteController.get = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró al estudiante.',
    })
  } else {
    try {
      const estudiante = await Estudiante.findById({ _id: id })
      res.status(200).json(estudiante)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//POST
estudianteController.post = async (req, res) => {
  const { nombre, apellido, email, telefono, fechaNacimiento, uid } = req.body
  try {
    const estudiante = new Estudiante({
      nombre,
      apellido,
      email,
      telefono,
      uid,
      fechaNacimiento,
    })
    estudiante.save()
    res.status(200).json(estudiante)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//PUT
estudianteController.put = async (req, res) => {
  const id = req.query.id
  const {
    nuevoNombre,
    nuevoApellido,
    nuevoEmail,
    nuevoTelefono,
    nuevoUid,
    nuevoFechaDeNacimiento,
  } = req.body
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró al estudiante.',
    })
  } else {
    try {
      const estudiante = await Estudiante.findByIdAndUpdate(id, {
        nombre: nuevoNombre,
        apellido: nuevoApellido,
        email: nuevoEmail,
        telefono: nuevoTelefono,
        uid: nuevoUid,
        fechaNacimiento: nuevoFechaDeNacimiento,
      })
      res.status(200).json(estudiante)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//DELETE
estudianteController.delete = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró al estudiante.',
    })
  } else {
    try {
      const estudiante = await Estudiante.findByIdAndDelete(id)
      res.status(200).json(estudiante)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

module.exports = estudianteController
