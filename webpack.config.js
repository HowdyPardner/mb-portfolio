const path = require('path');

module.exports = {
    entry: './js/scripts.js',
    output: {
        filename: 'bundle.js', // Specify the output filename
        path: path.resolve(__dirname, 'dist'), // Specify the output directory as 'dist'
    },
};
