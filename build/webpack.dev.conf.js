const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpack = require('webpack');
const config = require('../config/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseWebpackConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: false
                }
            }, {
                loader: 'postcss-loader'
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})