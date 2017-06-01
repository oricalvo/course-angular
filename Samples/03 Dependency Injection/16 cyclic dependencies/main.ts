import {
    Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject,
    Injector
} from "@angular/core";

@Injectable()
class MyService1 {
    constructor(@Inject(forwardRef(()=>MyService2)) private service2: MyService2) {
    }
}

@Injectable()
class MyService2 {
    constructor(private service1: MyService1) {
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyService1,
    MyService2,
]);

const obj = injector.get(MyService1);
