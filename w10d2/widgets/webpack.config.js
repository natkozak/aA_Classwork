const path = require('path');
const { env } = require('process');

module.exports = {
  entry: './frontend/widgets.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
};