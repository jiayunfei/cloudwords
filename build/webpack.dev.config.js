const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoadPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: {
    app: './view/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cloudWord.js',
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules/')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[ext]'
          }
        }],
        exclude: path.resolve(__dirname, 'node_modules/')
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } }
        ],
        exclude: path.resolve(__dirname, 'node_modules/'),
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../view/index.html')
    }),
    new VueLoadPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    }
  }
}