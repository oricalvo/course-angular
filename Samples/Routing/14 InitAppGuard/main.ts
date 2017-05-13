import {
    Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject,
    Injector, Self, SkipSelf
} from "@angular/core";

@Injectable()
class MyService1 {
}

@Injectable()
class MyService2 {
    constructor(@SkipSelf() private service1: MyService1) {
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyService1,
]);

const child = injector.resolveAndCreateChild([MyService1, MyService2]);

const service2 = child.get(MyService2);
const service1 = child.get(MyService1);
console.log(service1 == service2.service1);

