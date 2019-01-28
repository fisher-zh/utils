const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'utils.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};