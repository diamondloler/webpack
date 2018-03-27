"use strict"
const merge = require('webpack-merge')
const proENV = require('./prod.env')

module.exports = merge(proENV, {
    NODE_ENV: '"development"'
})