const Rx = require("rxjs");

const obs = Rx.Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.complete();
});

obs.subscribe(val => {console.log(val);});
obs.subscribe(val => {console.log(val);});
