const Sequelize = require('sequelize')
// const User = require('../data/User')

const env = process.env.NODE_ENV || 'development'
const settings = require('../config/settings')[env]
const sequelize = new Sequelize(settings.db, settings.user, settings.password, {
  host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})


module.exports = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Conected to MySql!')
      require('../data/User').seedAdminUser()
     })
     .catch((err) => {
      console.error("Unable to connect", err)
     })
}

module.exports.sequelize = sequelize




// const mongoose = require('mongoose')
// const User = require('../data/User')

// mongoose.Promise = global.Promise

// module.exports = (settings) => {
//   mongoose.connect(settings.db)
//   let db = mongoose.connection

//   db.once('open', err => {
//     if (err) {
//       throw err
//     }

//     console.log('MongoDB ready!')

//     User.seedAdminUser()
//   })

//   db.on('error', err => console.log(`Database error: ${err}`))
// }
