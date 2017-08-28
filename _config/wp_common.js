const
path    = require('path'),
loaders = require('./wp_loaders'),
alias   = require('./wp_alias');


module.exports = {
    entry  : path.resolve(__dirname, '../src'),
    resolve: {
        extensions: ['.js', '.jsx', '.less'],
        alias     : alias
    },
    module: {
        rules: loaders
    }
};