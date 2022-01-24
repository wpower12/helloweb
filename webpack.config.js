const path = require('path');

module.exports = {

  mode: 'development',

  entry: {
    index: './src/js/index.js',
   },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    clean: true,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};