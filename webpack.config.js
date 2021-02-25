const path = require('path')
const glob = require('glob')
const pageManifest = glob.sync('./pages/**/*.+(js|jsx|ts|tsx)')

module.exports = {
  target: 'webworker',
  context: __dirname,
  entry: ['./index.js', ...pageManifest],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/__reacfy'),
    publicPath: '__reacfy',
    filename: 'worker.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}
