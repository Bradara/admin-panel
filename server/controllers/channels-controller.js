const Channel = require('../data/Channel')

module.exports = {
    get: (req, res) => {
       let channels = Channel.findAll()
       res.locals.channels = channels
       res.render('channels/view')
    },
    add: (req, res) => {
        res.render('channels/add')
    }
}