const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    header: './assets/js/header.js',
    main: './assets/js/main.js',
    leaflet: './assets/js/leaflet.js',
    chartjs: './assets/js/chartjs-plugin-annotation.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
