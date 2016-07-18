var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //webpack-server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true,
        port: 9999
    },

    //为了使jwt可以使用
    node: {
        net: 'empty',
        dns: 'empty'
    },

    //开发工具,在开发模式下,可以方便调试,生产环境中,应该去掉该选项
    devtool: '#eval-source-map',

    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },

    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        // publicPath: '/',
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
                loader: 'file?hash=sha512&digest=hex&name=imgs/[hash].[ext]'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts&name=fonts/[hash].[ext]'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts&name=fonts/[hash].[ext]'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts&name=fonts/[hash].[ext]'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts&name=fonts/[hash].[ext]'
            },
            {
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.js?$/,
                loader: 'babel',
                include: APP_PATH,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                exclude: [
                    path.resolve(ROOT_PATH, "node_modules")
                ]
            }
        ],
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint'
            }
        ]
    },

    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new ExtractTextPlugin('style.[hash].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            _: "lodash",
            lodash: "lodash",
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            title: 'react starter',
            template: './templates/index.tpl'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};