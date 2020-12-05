const  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SRC = path.resolve(__dirname, 'node_modules');

module.exports={
    mode:'development',
    entry: {
        app:'./src/index.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: "Webpack App",
            favicon: "./src/asset/imgs/favicon.ico"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|ttf)$/,
                use:{
                    loader: 'url-loader'
                }
            },
            {
                test: /\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(mp3|wav|wma|ogg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'asset/audio/',
                        publicPath: 'asset/audio/'
                    }
                }
            },
        ]
    }
};
