let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
    entry: 'dist/my.module.js',
    external: [
        "tslib",
        "@angular/core"
    ],
    globals: {
        tslib: '',
    },
    targets: [
        {
            dest: "package/my.umd.js",
            moduleName: "my",
            format: 'umd',
            sourceMap: true
        },
        {
            dest: "package/my.es6.js",
            format: 'es',
            sourceMap: true
        }
    ]
};
