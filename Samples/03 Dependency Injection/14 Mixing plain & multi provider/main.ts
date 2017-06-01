import {Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject} from "@angular/core";

@Injectable()
class MyService1 {
    constructor() {
        console.log("MyService1");
    }
}

@Injectable()
class MyService2 {
    constructor() {
        console.log("MyService2");
    }
}

const SERVICES = new InjectionToken("MyServices");

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: SERVICES, useClass: MyService1, multi: true},
    {provide: SERVICES, useClass: MyService2},
]);

const obj = injector.get(SERVICES);
console.log(obj);
