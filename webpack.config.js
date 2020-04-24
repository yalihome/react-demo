const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const EncodingPlugin = require("webpack-encoding-plugin");
const webpack = require("webpack");
//output 的chunkname 和 filename 有什么区别？

module.exports = {
    entry: {
        app: "./src/index.js",
        vendor: ["react","react-dom"]
    },
    output:{
        filename: "[name].[hash].js",
        path: path.resolve(__dirname,"./dist")
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.optimize.SplitChunksPlugin({
            name: "vendor"
        }),
        new EncodingPlugin({
            encoding: "UTF-8"
        })
    ],
    mode: "development"
}