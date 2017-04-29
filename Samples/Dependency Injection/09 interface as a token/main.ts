import {Injectable, ReflectiveInjector} from "@angular/core";

interface IMyService {
    doSomething(): any;
}

class MyService {
    doSomething(): any {
        console.log("MyService");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: IMyService, useClass: MyService},
]);

const obj = injector.get(IMyService);
obj.dump();
