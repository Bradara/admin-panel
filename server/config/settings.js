const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'adminpanel',
    port: 4400,
    user: 'root',
    password: '1234'
  },
  staging: {
  },
  production: {
    port: process.env.PORT
  }
}
