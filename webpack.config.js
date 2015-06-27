
module.exports = {
  entry: './app/index',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'build',
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
    ]
  }
}
