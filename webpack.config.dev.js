var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

module.exports={
    entry: {
        frame: ['react','react-dom','whatwg-fetch'],
        'eeindex': ['./rnapp/early_edu/EeIndex.js']
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: "",// 链接的前缀地址，通常是cdn地址
        //filename: "[name].[chunkhash].js"
        filename: "[name].js"
    },
    module: {
        loaders: [    //加载器
            {test: /\.css$/, loader:ExtractTextPlugin.extract("style", "css!autoprefixer-loader") },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            //{ test: /\.png$/, loader: "file-loader?name=img/[hash:8].[name].[ext]" }
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url?name=img/[name].[hash:16].[ext]&limit=8192!img?progressive=true' }
        ]
    },
    plugins:[
        //new webpack.DefinePlugin({
        //    'process.env': {
        //        'NODE_ENV': '"production"'
        //    }
        //}),
        new WebpackMd5Hash(),
        //new ExtractTextPlugin("[name].[contenthash:16].css"),   //单独使用style标签加载css并设置其路径
        new ExtractTextPlugin("[name].css"),   //单独使用style标签加载css并设置其路径
        //new webpack.optimize.UglifyJsPlugin(
        //    {
        //        compress: {
        //            warnings: false
        //        }
        //    }
        //),
        new HtmlWebpackPlugin({                        //根据模板插入css/js等生成最终HTML
            filename:'eeindex.html',    //生成的html存放路径，相对于 path
            template:'./rnapp/early_edu/early_edu_index.html',    //html模板路径
            inject:true,    //允许插件修改哪些内容，包括head与body
            hash:false,    //为静态资源生成hash值
            chunks:['frame','eeindex'],
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
            }
        }),
        //new webpack.optimize.CommonsChunkPlugin({names: ['frame'], filename: '[name].[chunkhash].js'})
        new webpack.optimize.CommonsChunkPlugin({names: ['frame'], filename: '[name].js'})

    ]
};