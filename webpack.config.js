const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'none',

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      // BABEL
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: { cacheDirectory: true },
      //   },
      // },

      // HTML LOADER + plug
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },

      // FILE LOADER - images
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          output: 'img/',
          // css url path after build
          publicPath: '../',
        },
      },

      // FILE LOADER - fonts
      {
        test: /\.(woff|ttf)$/,
        use: ['file-loader'],
      },

      // CSS LOADER + split plug
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // SASS LOADER
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new MiniCssExtractPlugin({
      // css output path
      filename: 'css/[name].css',
    }),

    new CssMinimizerPlugin(),
  ],
};
