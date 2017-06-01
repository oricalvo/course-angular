import {ReflectiveInjector} from "@angular/core";

class MyClass1 {
    dump() {
        console.log("xxx");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyClass1,
]);

const obj = injector.get(MyClass1);
