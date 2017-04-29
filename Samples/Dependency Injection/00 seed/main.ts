import {Injectable, InjectionToken, ReflectiveInjector, Compiler} from "@angular/core";

interface IMyService {
    doSomething(): any;
}

const IMY_SERVICE = new InjectionToken<IMyService>("xxx");

class MyService {
    doSomething(): any {
        console.log("MyService");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: IMY_SERVICE, useClass: MyService},
]);

const obj = injector.get(IMY_SERVICE);
obj.doSomething();
