SystemJS.config({
    map: {
        "@angular/core": "node_modules/@angular/core/bundles/core.umd.js",
        "rxjs": "node_modules/rxjs",
    },
    packages: {
        "rxjs": {
            defaultExtension: "js",
        }
    }
});