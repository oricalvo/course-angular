import {Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject} from "@angular/core";

@Injectable()
class MyService1 {
    constructor(@Inject(forwardRef(()=>MyService2)) s: MyService2) {
        console.log("MyService");
    }
}

@Injectable()
class MyService2 {
    constructor(s: MyService1) {
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyService1,
    MyService2,
]);

const obj = injector.get(MyService1);
console.log(obj);
