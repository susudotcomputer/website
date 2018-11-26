const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BatteryWebpackPlugin = require('@battery/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./battery.config').default;

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets/')
    }
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader']
      },
      {
        test: /\.(png|svg|jpg|gif|mp4)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new BatteryWebpackPlugin({ config })
  ]
};
