import {
    Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject,
    Injector
} from "@angular/core";

@Injectable()
class MyService {
    constructor(private injector: Injector) {
    }

    doSomething() {
        const s = injector.get(OtherService);
        console.log(s instanceof  OtherService);
    }
}

@Injectable()
class OtherService {
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyService,
    OtherService,
]);

const obj = injector.get(MyService);
obj.doSomething();
