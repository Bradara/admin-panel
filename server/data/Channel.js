const Sequelize = require('sequelize')
const Model = Sequelize.Model
const sequelize = require('../config/database').sequelize

class Channel extends Model{}

Channel.init( {
    name: {type: Sequelize.STRING, allowNull: false},
    timeout: {type: Sequelize.TINYINT, defaultValue: 0},
    input_http: {type: Sequelize.STRING, allowNull: false},
    input_udp: {type: Sequelize.STRING},
    input_file: {type: Sequelize.STRING},
    input_pnr: {type: Sequelize.INTEGER, unique: true},
    input_filter: {type: Sequelize.DECIMAL},
    output_http: {type: Sequelize.STRING}, //To add "#keep_active"
    output_udp: {type: Sequelize.STRING},
    map_pmt: {type: Sequelize.INTEGER, allowNull:false},
    map_video: {type: Sequelize.INTEGER, allowNull:false},
    map_audio: {type: Sequelize.INTEGER, allowNull:false},
    enable: {type: Sequelize.BOOLEAN}
},
{
    sequelize,
    modelName: 'channels'
})

Channel.sync().then( () => {
    console.log('Table Channels created!')
}).catch( err => {
    console.log(err)
})

module.exports = Channel