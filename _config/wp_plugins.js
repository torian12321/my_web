const
webpack = require('webpack'),
ExtractText = require('extract-text-webpack-plugin'),
SWPrecache = require('sw-precache-webpack-plugin'),
path    = require('path'),
Clean   = require('clean-webpack-plugin'),
Copy    = require('copy-webpack-plugin'),
HTML    = require('html-webpack-plugin'),
root    = path.join(__dirname, '..'),
manifest= require('../src/static/manifest');


module.exports = (isProd) => {

  // base plugins array
  const plugins = [
    new Copy([{ context: './src/static/', from: '**/*.*' }]),
    new HTML({
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify  : {
        preserveLineBreaks   : false,
        removeComments       : false,
        collapseWhitespace   : isProd,
        removeAttributeQuotes: isProd,
        removeEmptyAttributes: isProd,
        removeEmptyElements  : false,
        minifyCSS            : isProd,
        minifyJS             : isProd,
        keepClosingSlash     : false
      },
      data: manifest
	  }),
  ];

  // prod only
  if (isProd) {
		plugins.push(
      new Clean([path.resolve(__dirname, '../dist')], { root }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractText('styles.[hash].css'),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug   : false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: 0
        },
          compress: {
          unused: 1,
          warnings: 0,
          comparisons: 1,
          conditionals: 1,
          negate_iife: 0,
          dead_code: 1,
          if_return: 1,
          join_vars: 1,
          evaluate: 1
        }
      }),
      new SWPrecache({
        minify: false,
				filename: 'service-worker.js',
				dontCacheBustUrlsMatching: /./,
				navigateFallback: 'index.html',
				staticFileGlobsIgnorePatterns: [/\.map$/]
			})
		);
	} else {
		// dev only
		plugins.push(
			
		);
	}

  return plugins;
};
