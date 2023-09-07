const path = require('path');

module.exports = {
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true, //this will get rid of files that already exist
        // https://webpack.js.org/configuration/output/#outputlibrary
        library: '@1715/passage', //this will make the library available as a global variable/export
        libraryTarget: 'umd',
        globalObject: 'this', //'this' so that it can define 'self'
    },
};
