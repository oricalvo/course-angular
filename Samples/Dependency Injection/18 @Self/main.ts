import {
    Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject,
    Injector, Self
} from "@angular/core";

@Injectable()
class MyService1 {
}

@Injectable()
class MyService2 {
    constructor(@Self() @Optional() private service1: MyService1) {
        console.log(!!service1);
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyService1,
]);

const child = injector.resolveAndCreateChild([MyService2]);

const obj = child.get(MyService2);
