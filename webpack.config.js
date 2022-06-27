const path = require('path')

module.exports = {
    entry: './src/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 绝对路径
        filename: 'bundle.js'  //出口文件
    }
}