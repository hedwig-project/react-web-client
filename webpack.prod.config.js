const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '/[name].[chunkhash].js',
  },
  devtool: 'scheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
        exclude: /flexboxgrid/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
        include: /flexboxgrid/,
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //  Pegue todos os modules comuns entre os arquivos e coloque-os em vendor
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false, // remove comments
      compress: {
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false, // good for prod apps so users can't peek behind curtain
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
      },
    }),
    //  Linkar automaticamte no html os JS gerados
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    // new BundleAnalyzerPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br/),
    new CompressionPlugin({
      asset: '/[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
