/// <reference path="node_modules/zone.js/dist/zone.js.d.ts" />

profile(run);

// function profile(func) {
//     let before, after;
//
//     const spec: ZoneSpec = {
//         name: "my",
//         onHasTask: function(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, hasTaskState: HasTaskState) {
//             if(!hasTaskState.eventTask && !hasTaskState.macroTask && !hasTaskState.microTask) {
//                 after = performance.now();
//
//                 console.log("DONE", (after-before));
//             }
//         }
//     };
//
//     var myZone = Zone.current.fork(spec);
//
//     console.log("Profiling: " + func.name);
//
//     before = performance.now();
//
//     myZone.run(func);
// }

async function run() {
    delay(1000).then(function() {
        console.log("STEP 1");

        delay(2000).then(function() {
            console.log("STEP 2");
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
        onHasTask: function(parentZoneDelegate: ZoneDelegate, currentZone: Zone, targetZone: Zone, hasTaskState: HasTaskState) {
            if(!hasTaskState.eventTask && !hasTaskState.macroTask && !hasTaskState.microTask) {
                console.log("DONE");
            }
        }
    };

    var zone = Zone.current.fork(spec);
    zone.run(func);
}
