const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'none',
  entry: {
    'app': './src/index.js',
    'app.min': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: 'cloudWords',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: path.resolve(__dirname, 'node_modules/')
    }]
  }
}