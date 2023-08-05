/*
 * @Description: 这是***页面（组件）
 * @Date: 2023-08-04 10:43:08
 * @Author: zhangyu
 * @LastEditors: zhangyu
 * @LastEditTime: 2023-08-04 10:43:40
 */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path');
module.exports = merge(common, {
    mode: 'development', // Don't minify the source
    devtool: 'eval-source-map', // Source map for easier development
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'), // Serve static files from here
        },
        hot: true, // Reload our page when the code changes
    },
})
