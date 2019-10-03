const Channel = require('../data/Channel')

module.exports = {
    channelsGet: (req, res) => {
       let Channels = Channel.findAll()
    }
}