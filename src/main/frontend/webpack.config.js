const path = require('path');

//Needed for the HotModuleReplacementPlugin!
var webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './client/index.js',

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:9090', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './client/index.js' // Your appʼs entry point
    ],

    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    }
    ,
    devServer :{
        port: 9090,
        hot:true
    },
    module: {
        loaders: [
            { test: /\.css$/, exclude: /node_modules/,loaders: ['style-loader', 'css-loader'],},
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

