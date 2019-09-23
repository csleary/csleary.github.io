const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  entry: path.resolve(__dirname, 'webpack/main.js'),
  output: {
    path: path.resolve(__dirname, 'src/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
