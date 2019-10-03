const Sequelize = require('sequelize')
const encryption = require('../utilities/encryption')

// const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

const Model = Sequelize.Model
const sequelize = require('../config/database').sequelize

class User extends Model {
  authenticate(password){
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  }
}

User.init({
    username: {type: Sequelize.STRING, allowNull: false, unique: true},
    firstName: {type: Sequelize.STRING},
    salt: Sequelize.STRING,
    hashedPass: Sequelize.STRING,
    role: {type: Sequelize.STRING, defaultValue: 'User'}}, 
    {
      sequelize,
      modelName: 'user'
    })
  
    User.sync().then(()=> {
      console.log('Table User sync!')
    })

module.exports = User

module.exports.seedAdminUser = () => {
  User.findAll().then(users => {
    if (users.length > 0) return

    let salt = encryption.generateSalt()
    let hashedPass = encryption.generateHashedPassword(salt, '123456')

    User.create({
      username: 'Admin',
      firstName: 'Admin',
      lastName: 'Admin',
      salt: salt,
      hashedPass: hashedPass,
      role: 'Admin'
    })
  })
}
