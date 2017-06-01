const path = require("path");
const {AotPlugin} = require ('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/main.ts",

    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
            },
            {
                test: /\.css$/,
                use: [
                    //"exports-loader?module.exports.toString()",
                    "to-string-loader",
                    'css-loader',
                ],
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader',
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
            title: "My App",
            template: "./index.html",
            filename: "./index.html",
        })
    ]
};


module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                //"exports-loader?module.exports.toString()",
                "to-string-loader",
                'css-loader',
            ],
        },
        {
            test: /\.jpg$/,
            loader: 'url-loader',
        },
    ]
},
