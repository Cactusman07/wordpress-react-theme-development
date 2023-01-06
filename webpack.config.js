const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-modules-typescript-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'url-loader'
      },
      {
        test: /\.(woff2|woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: {
        target: 'http://localhost:8080'
      },
      files: ['**/*.php'],
      cors: true,
      reloadDelay: 0,
      open: false
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  }
}
