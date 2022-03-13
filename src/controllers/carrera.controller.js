const Carrera = require('../models/carrera.model')
const carreraController = {}

//GET DE TODOS
carreraController.getAll = async (req, res) => {
  try {
    const carrera = await Carrera.find({ status: 'active' })
    if (carrera.length === 0) {
      res.status(404).json({
        message: 'No se encontró ninguna carrera.',
      })
      return
    }
    res.status(200).json(carrera)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//GET POR ID
carreraController.get = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró la carrera.',
    })
  } else {
    try {
      const carrera = await Carrera.findById({ _id: id })
      res.status(200).json(carrera)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//POST
carreraController.post = async (req, res) => {
  const {
    nombre,
    descripcionCorta,
    descripcionLarga,
    urlImagen,
    uid,
  } = req.body
  try {
    const carrera = new Carrera({
      nombre,
      descripcionCorta,
      descripcionLarga,
      urlImagen,
      uid,
    })
    carrera.save()
    res.status(200).json(carrera)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//PUT
carreraController.put = async (req, res) => {
  const id = req.query.id
  const {
    nuevoNombre,
    nuevaDescripcionCorta,
    nuevaDescripcionLarga,
    nuevaUrlImagen,
    nuevoUid,
  } = req.body
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró la carrera.',
    })
  } else {
    try {
      const carrera = await Carrera.findByIdAndUpdate(id, {
        nombre: nuevoNombre,
        descripcionCorta: nuevaDescripcionCorta,
        descripcionLarga: nuevaDescripcionLarga,
        urlImagen: nuevaUrlImagen,
        uid: nuevoUid,
      })
      res.status(200).json(carrera)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//DELETE
carreraController.delete = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró la carrera.',
    })
  } else {
    try {
      const carrera = await Carrera.findByIdAndDelete(id)
      res.status(200).json(carrera)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

module.exports = carreraController
