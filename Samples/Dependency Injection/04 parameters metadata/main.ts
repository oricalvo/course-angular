import {ReflectiveInjector} from "@angular/core";

class MyClass1 {
    dump() {
        console.log("xxx");
    }
}

class MyClass2 {
    static ctorParameters = [MyClass1];

    constructor(obj1: MyClass1) {
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyClass1,
    MyClass2
]);

const obj = injector.get(MyClass2);
