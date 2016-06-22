var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx'),
        //添加要打包在libs里面的库
        libs: ['lodash', 'jquery', 'bootstrap']
    },

    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        publicPath: '/',
        filename: 'bundle.[hash].js'
    },

    module: {
        loaders: [
            {
                test: /\.(sa|sc)ss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=40000&name=[hash].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'url?limit=40000&name=[hash].[ext]'
            },
            {
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            }
        ]
    },


    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new CleanPlugin(['build']),

        // 这个插件用来寻找相同的包和文件，并把它们合并在一起
        new webpack.optimize.DedupePlugin(),

        // 这个插件根据包/库的引用次数来优化它们
        new webpack.optimize.OccurenceOrderPlugin(),

        // 这个插件用来阻止Webpack把过小的文件打成单独的包
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200 // ~50kb
        }),
        new ExtractTextPlugin('style.[hash].css', {
            allChunks: true
        }),

        new webpack.ProvidePlugin({
            _: "lodash",
            lodash: "lodash",
            $: 'jquery',
            jQuery: 'jquery'
        }),
        //把入口文件里面的数组打包成libs.js
        new webpack.optimize.CommonsChunkPlugin('libs', 'libs.[hash].js'),

        new webpack.optimize.UglifyJsPlugin({minimize: true}),

        new HtmlWebpackPlugin({
            title: 'react starter',
            template: './templates/index.tpl'
        })
    ]
};