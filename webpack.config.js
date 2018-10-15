const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BatteryWebpackPlugin = require('@battery/webpack-plugin');
const config = require('./battery.config').default;

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', BatteryWebpackPlugin.loader]
      },
      {
        test: /.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new BatteryWebpackPlugin({ config })
  ]
};
