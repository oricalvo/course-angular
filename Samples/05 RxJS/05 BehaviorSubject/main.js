const Rx = require("rxjs");

const o = Rx.Observable.create(obs => {
    let count = 0;

    obs.next(count++);
});

const subscription = o.subscribe(val => {
    console.log(val);
});

setTimeout(function() {
    subscription.unsubscribe();
}, 3000);