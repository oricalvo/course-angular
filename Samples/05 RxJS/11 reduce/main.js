const Rx = require("rxjs");

const subscription = Rx.Observable.interval(500)
    .subscribe(x => {
        console.log(x);

        if(x==5) {
            subscription.unsubscribe();
        }
    });
