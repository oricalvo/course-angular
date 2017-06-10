const Rx = require("rxjs");

const o = Rx.Observable.create(obs => {
    obs.next(1);
    obs.next(2);
    obs.complete();
});

o.subscribe(val => {
    console.log(val);
}, err => {
    //console.error(err);
    console.log("YYY");
});
