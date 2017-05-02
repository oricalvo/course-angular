import {
    Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject,
    Injector
} from "@angular/core";

@Injectable()
class MyService1 {
    _service2: MyService2;

    constructor(private injector: Injector) {
    }

    get service2() {
        if(!this._service2) {
            this._service2 = this.injector.get(MyService2);
        }

        return this._service2;
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
console.log(obj.service2 instanceof MyService2);
