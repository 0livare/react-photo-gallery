const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'photoswipe-react.js',
    library: 'photoswipeReact',
    libraryTarget: 'umd',
    globalObject: 'this || self',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ]
  },
  externals: {
    react: 'react',
  }
}