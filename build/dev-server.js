const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../config/index');

const devConfig = require('./webpack.dev.conf.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost',
  port: config.dev.port
};

webpackDevServer.addDevServerEntrypoints(devConfig, options);
const compiler = webpack(devConfig);
const server = new webpackDevServer(compiler, options);

server.listen(config.dev.port, 'localhost', () => {
  console.log('dev server listening on port ' + config.dev.port);
});