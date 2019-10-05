module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/users/login')
    }
  },
  isInRole: (role) => {
    return (req, res, next) => {
      if (req.isAuthenticated() && req.user.role === 'Admin') {
        next()
      } else {
        res.redirect('/users/login')
      }
    }
  }
}
