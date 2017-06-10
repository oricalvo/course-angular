const Rx = require("rxjs");

const obs = Rx.Observable.create(obs => {
    obs.next(1);
    obs.next(2);
    obs.complete();
});

console.log("Before");
obs.subscribe(val => {
    console.log(val);
});
console.log("After");
