"use strict"

const path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: '',
        assetsPublicPath: '',
        productionSourceMap: true
    },
    dev: { 
        env: require('./dev.env'),
        port: process.env.PORT || 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: '',
        assetsPublicPath: '',
        proxyTable: {},
        cssSourceMap: false
    }
}
