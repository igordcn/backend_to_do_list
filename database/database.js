const mongoose = require('mongoose')

const { mongoConnection } = require('../config/mongoconnection.json')

mongoose.connect(mongoConnection, { useNewUrlParser: true })

mongoose.Promise = global.Promise

module.exports = mongoose