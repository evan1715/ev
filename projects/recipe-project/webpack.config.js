import path from 'node:path';
import { EsbuildPlugin } from 'esbuild-loader'; //This will transpile & minify our JS & CSS files.
import HtmlWebpackPlugin from 'html-webpack-plugin'; //This creates a new html file per compile.
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; //This plugin creates a CSS separate CSS file.

const __dirname = import.meta.dirname;
const outputPath = path.join(__dirname, 'public'); //need to tell webpack where the files go
const devMode = process.env.NODE_ENV !== 'production'; //Store whether we're in dev or prod for utility.
console.log('Webpack is in:', process.env.NODE_ENV, 'mode'); //Tell us what mode it is put in so we can confirm.

//Webpack Config
export default {
    //This is the entry point for our application.
    entry: { index: '/client/src/index.js' },
    //This sets the js output filename and where to put it.
    output: {
        path: outputPath,
        publicPath: '/', //This is the public path for our assets.
        filename: '[name].bundle.js',
        // filename: 'bundle.js',
        // chunkFilename: '[name].chunk.js', //This will allow us to split our code into chunks.
        clean: true, //this will get rid of files that already exist
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './client/src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], //This will allow us to import these file types without specifying the extension.
    },
    module: {
        rules: [
            {
                // https://github.com/privatenumber/esbuild-loader?tab=readme-ov-file#loader-1
                test: /\.[jt]sx?$/,
                loader: 'esbuild-loader',
                options: {
                    target: 'es2022', // JavaScript version to compile to
                    loader: 'tsx', // Treat `.js` files as `.jsx` files
                    jsx: 'automatic', // Enable JSX parsing
                },
                exclude: /node_modules/,
            },
            //CSS loader & extractor
            {
                test: /\.s?css$/,
                //use allows us to use an array of loaders
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            //File loader
            { test: /\.(png|jpg|jpeg|bmp|gif|svg)$/, type: 'asset/resource' },
        ],
    },
    optimization: {
        minimize: !devMode, //This will only minimize our code in production mode.
        //Compress our js and css files.
        minimizer: [
            // https://github.com/privatenumber/esbuild-loader?tab=readme-ov-file#esbuildplugin-1
            new EsbuildPlugin({
                target: 'es2022',
                minify: true,
                legalComments: 'none',
                css: true,
                drop: ['console', 'debugger'],
            }),
        ],
        // splitChunks: devMode
        //     ? {}
        //     : {
        //           cacheGroups: {
        //               react_redux: {
        //                   test: /[\\/]node_modules[\\/](history|hoist-non-react-statics|mini-create-react-context|prop-types|react|redux|scheduler)/,
        //                   name: 'react-redux',
        //                   chunks: 'all',
        //               },
        //           },
        //       },
    },
    //Source mapping allows us to still find the location of our errors in the console.
    devtool: devMode ? 'inline-source-map' : 'source-map',
    //This will tell webpack what mode to run it based on which script we will run.
    mode: devMode ? 'development' : 'production',
    //webpack-dev-server is a required package module for this.
    devServer: {
        static: {
            directory: outputPath,
            publicPath: '/', //publicPath is to specify where the bundled assets should be.
        },
        //historyApiFallback says that we're going to handle all of our routing through React clientside.
        historyApiFallback: true, //This will return index.html for all 404 routes.
        port: 3000,
        open: true, //open browser
        liveReload: true, //reload browser tab on change
    },
};
