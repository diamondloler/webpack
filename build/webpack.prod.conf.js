const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack');
const path = require('path')

module.exports = merge(baseWebpackConfig, {
    devtool: 'source-map',
    output:{
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    'postcss-loader'
                ],
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: path.posix.join('css/[name].[hash].css')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
              // 获取所有node_modules文件夹下被用的的vendor并分割
              return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, '../node_modules')
                ) === 0
              )
            }
          }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
          }),
    ]
})