const Rx = require("rxjs");

const obs = Rx.Observable.create(obs => {
    obs.next(1);
    obs.next(2);
    obs.complete();
});

const observer = {
    next: value => {
        console.log(value);
    }
}

obs.subscribe(observer);
