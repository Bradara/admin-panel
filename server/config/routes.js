const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', auth.isAuthenticated, controllers.home.index)
  app.get('/about', auth.isAuthenticated, controllers.home.about)
  app.get('/channels/view', auth.isAuthenticated, controllers.channels.channelsGet)

  app.get('/users/register', auth.isAuthenticated, controllers.users.registerGet)
  app.post('/users/register',auth.isAuthenticated,  controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.post('/users/logout', auth.isAuthenticated, controllers.users.logout)

  app.get('/channels/add', auth.isAuthenticated, controllers.channels.add)
  app.get('/channels/view', auth.isAuthenticated, controllers.channels.get)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
