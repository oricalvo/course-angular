const path = require('path');
const {AotPlugin} = require("@ngtools/webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/main.ts",

    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js", // string
    },

module: {
    rules: [
        {
            test: /\.ts$/,
            loader: '@ngtools/webpack',
        },
        {
            test: /\.html$/,
            use: 'raw-loader'
        },
        {
            test: /\.css$/,
            use: 'raw-loader'
        },
    ]
},

plugins: [
    new AotPlugin({
        tsConfigPath: 'tsconfig.json',
        mainPath: 'app/main.ts',
        skipCodeGeneration: true,
    }),
    new HtmlWebpackPlugin({
        title: 'My App',
        template: "./index.html",
        filename: './index.html'
    })
],

    resolve: {
        extensions: [".ts", ".js"]
    }
}
