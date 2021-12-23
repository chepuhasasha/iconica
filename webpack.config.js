const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const DEV = {
    mode: 'development',
    entry: './example/index.js',
    devtool: 'inline-source-map',
    devServer: {
      allowedHosts: 'all'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  }

  const PROD = {
    mode: 'production',
    entry: './shapeshape/index.js',
    output: {
      path: path.resolve(__dirname + '/shapeshape', 'dist'),
      filename: 'index.js',
      library: {
        name: 'shapeshape',
        type: 'umd',
      },
      clean: true,
    },
  }

  return env.production ? PROD : DEV
};