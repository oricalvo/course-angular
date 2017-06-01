/// <reference path="node_modules/zone.js/dist/zone.js.d.ts" />

profile(run);

async function run() {
    delay(1000).then(function() {
        delay(2000).then(function() {
            console.log(Zone.current.get("id"));
        });
    });
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    });
}

function profile(func) {
    const spec: ZoneSpec = {
        name: "my",
        properties: {
            id: 123,
        },
    };

    var zone = Zone.current.fork(spec);
    zone.run(func);
}
