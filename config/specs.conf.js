require('dotenv').config()

let specsConf = {
    specs: [
        './test/specs/**/*.spec.js'
    ],
    suites: {
        products: [
            './test/specs/cart.spec.js'
        ]
    },
}

module.exports = { specsConf }