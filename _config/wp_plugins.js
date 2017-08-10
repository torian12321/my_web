const
webpack = require('webpack'),
path    = require('path'),
Clean   = require('clean-webpack-plugin'),
Copy    = require('copy-webpack-plugin'),
HTML    = require('html-webpack-plugin'),
root    = path.join(__dirname, '..'),
manifest= require('../src/static/manifest');



module.exports = (outDir, isProd) => {
  
  // base plugins array
  const plugins = [
    new Clean([outDir], { root }),
    new Copy([{ context: './src/static/', from: '**/*.*' }]),
    new HTML({
      template: path.resolve(__dirname, '../src/index.ejs'),
      minify  : {
        preserveLineBreaks   : false,
        removeComments       : isProd,
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
			new webpack.optimize.ModuleConcatenationPlugin(),
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
        beautify: false,
        mangle  : {
          screw_ie8  : true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
		);
	} else {
		// dev only
		plugins.push(
			
		);
	}


  return plugins;
};