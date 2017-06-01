const path = require('path');
const {AotPlugin} = require('@ngtools/webpack');

module.exports = {
    entry: "./app/main.ts",

    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js", // string
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
            }
        ],
    },

    plugins: [
        new AotPlugin({
            tsConfigPath: 'tsconfig.json',
            mainPath: 'app/main.ts',
            skipCodeGeneration: true,
        })
    ]
}
