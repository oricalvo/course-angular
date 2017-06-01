import {Injectable, InjectionToken, ReflectiveInjector, Compiler, Optional, forwardRef, Inject} from "@angular/core";

@Injectable()
class MyService {
    constructor() {
        console.log("MyService");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: MyService, useClass: MyService, multi: true},
    {provide: MyService, useClass: MyService, multi: true},
]);

const obj = injector.get(MyService);
console.log(obj);
