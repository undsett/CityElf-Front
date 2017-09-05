const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bootstrapEntryPoints = require('./webpack.bootstrap.config');

const isProd = process.argv.indexOf('-p') !== -1;
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;
const devtoolConfig = isProd ? '' : 'source-map';

module.exports = {
    entry: {
        app: './dev/main.js',
        bootstrap: bootstrapEntryPoints.prod
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    devtool: devtoolConfig,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false','sass-loader']
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=img/[name].[ext]',
                    'image-webpack-loader'
                ]
            },
            { test: /\.(woff2?|svg)$/, loader: 'url-loader?url=false?limit=10000&name=fonts/[name].[ext]' },
            { test: /\.(ttf|eot)$/, loader: 'file-loader?url=false?name=fonts/[name].[ext]' },
            { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports-loader?jQuery=jquery' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8090,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CityElf',
            minify: {
                collapseWhitespace: true
            },
            template: './dev/index.html',
            inject: false
        }),
        new ExtractTextPlugin({   
            filename: '/css/[name].css'            
        })      
    ]
};