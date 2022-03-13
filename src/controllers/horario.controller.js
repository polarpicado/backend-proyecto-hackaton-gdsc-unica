const Horario = require('../models/horario.model')
const horarioController = {}

//GET DE TODOS EXCEPTO SI ES STATUS INACTIVE
horarioController.getAll = async (req, res) => {
  try {
    const horario = await Horario.find({ status: 'active' })
    if (horario.length === 0) {
      res.status(404).json({
        message: 'No se encontró ningún horario activo.',
      })
      return
    }
    res.status(200).json(horario)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//GET POR ID
horarioController.get = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró el horario.',
    })
  } else {
    try {
      const horario = await Horario.findById({ _id: id })
      res.status(200).json(horario)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//POST
horarioController.post = async (req, res) => {
  const { dias, horas, uid } = req.body
  try {
    const horario = new Horario({
      dias,
      horas,
      uid,
    })
    horario.save()
    res.status(200).json(horario)
  } catch (err) {
    res.status(500).json({
      error: 'Error: ' + err,
    })
  }
}

//PUT
horarioController.put = async (req, res) => {
  const id = req.query.id
  const { nuevosDias, nuevasHoras, nuevoUid } = req.body
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró el horario.',
    })
  } else {
    try {
      const horario = await Horario.findByIdAndUpdate(id, {
        horas: nuevasHoras,
        dias: nuevosDias,
      })
      res.status(200).json(horario)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

//DELETE
horarioController.delete = async (req, res) => {
  const id = req.query.id
  if (id === undefined) {
    res.status(404).json({
      message: 'No se encontró el horario.',
    })
  } else {
    try {
      const horario = await Horario.findByIdAndDelete(id)
      res.status(200).json(horario)
    } catch (err) {
      res.status(500).json({
        error: 'Error: ' + err,
      })
    }
  }
}

module.exports = horarioController
