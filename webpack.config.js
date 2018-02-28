const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const SRC_SCSS_DIR = path.join(__dirname, '/client/src/css');
const DIST_DIR = path.join(__dirname, '/public');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DIST_DIR, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'), // CSS will be extracted to this bundle file
  ],
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        include : SRC_SCSS_DIR,
        loaders: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  }
};
