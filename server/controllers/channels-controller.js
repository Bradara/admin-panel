const Channel = require('../data/Channel')

module.exports = {
    get: (req, res) => {
        let channels = Channel.findAll()
        res.locals.channels = channels
        res.render('channels/view')
    },
    add: (req, res) => {
        res.render('channels/add')
    },
    create: (req, res) => {
        let channel = req.body
        Channel.create({
            name: channel.name,
            timeout: channel.timeout,
            input_http: channel.input_http,
            input_udp: channel.input_udp,
            input_file: channel.input_file,
            input_pnr: channel.input_pnr,
            input_filter: channel.input_filter,
            output_http: channel.output_http, //To add "#keep_active"
            output_udp: channel.output_udp,
            map_pmt: channel.map_pmt,
            map_video: channel.map_video,
            map_audio: channel.map_audio,
            enable: channel.enable
        }).then(()=>{
            res.redirect('/channels/view')
        })
    }
}