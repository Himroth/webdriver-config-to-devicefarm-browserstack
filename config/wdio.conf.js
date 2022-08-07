require('dotenv').config()
const { bsConf } = require('./bs.conf')
const { localConf } = require('./local.conf')

function getConfig() { //função con switch para avaliar a ENV ENVIRONMENT se esta em um outro ambiente
    switch (process.env.ENVIRONMENT) {
        case 'local': default:
            return localConf
        case 'browserstack':
            return bsConf
        case 'saucelabs':
            return {}
    }
}

exports.config = getConfig()