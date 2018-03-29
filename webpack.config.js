const path = require('path')
const { AureliaPlugin } = require('aurelia-webpack-plugin')
const target = process.env['TARGET'] || 'http://localhost:8000/'

module.exports = {
  mode: 'development',
  entry: 'aurelia-bootstrapper',

  output: {
    path: path.resolve(__dirname, 'dist', 'app'),
    publicPath: '/dist/app/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src/app', 'node_modules']
  },

  module: {
    rules: [
      { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.ts$/i, use: 'ts-loader' },
      { test: /\.html$/i, use: 'html-loader' }
    ]
  },

  plugins: [
    new AureliaPlugin({ includeAll: 'src/app' })
  ],

  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8081,
    proxy: {
      '/api': {
        target: target,
        secure: false
      }
    }
  }
}
