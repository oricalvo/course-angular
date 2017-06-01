const {AotPlugin} = require("@ngtools/webpack");

module.exports = {
    output: {
        filename: 'dist/bundle.js',
    },
    entry: './app/main.ts',
    "resolve": {
        "extensions": [
            ".ts",
            ".js"
        ],
        "modules": [
            "./node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack',
            },
            {
                test: /\.css$/,
                use:[
                    "exports-loader?module.exports.toString()",
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            }
        ],
    },
    plugins: [
        new AotPlugin({
            mainPath: "app/main.ts",
            tsConfigPath: './tsconfig.json',
            skipCodeGeneration: true,
            "exclude": [],
        })
    ]
};
