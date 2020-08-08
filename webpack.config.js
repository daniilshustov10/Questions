const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer : {
        port: 3000
    }
}