const
merge     = require('webpack-merge'),
path      = require('path'),
wp_common = require('./_config/wp_common'),
wp_plugins= require('./_config/wp_plugins');

const isProd = process.env.NODE_ENV === 'production';
const outDir = isProd ?
  path.resolve(__dirname, './dist') :
  path.resolve(__dirname, './public');



module.exports = merge.smart(wp_common, {
  output: {
    path    : outDir,
    filename: '[name].[hash].js',
  },
  plugins: wp_plugins(outDir, isProd)
});