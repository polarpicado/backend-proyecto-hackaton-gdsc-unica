const mongoose = require('mongoose')
const chalk = require('chalk')

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const db = mongoose
  .connect(process.env.MONGOURI, dbOptions)
  .then(() => console.log(chalk.green('¡Conectado a la base de datos!')))
  .catch((err) => console.log(chalk.red(err)))

module.exports = mongoose
