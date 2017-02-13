Skip to content
This repository
Search
Pull requests
Issues
Gist
 @lisi2580
 Sign out
 Watch 25
  Star 354
  Fork 142 materliu/gallery-by-react
 Code  Issues 16  Pull requests 0  Projects 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathgallery-by-react/webpack.dist.config.js
4879e41  on 4 Sep 2015
@materliu materliu finish gallery-by-react project
1 contributor
RawBlameHistory     
70 lines (60 sloc)  1.57 KB
/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/components/GalleryByReactApp.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/'
    }
  },

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}!sass-loader?outputStyle=expanded'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help