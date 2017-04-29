import {ReflectiveInjector} from "@angular/core";

class MyClass1 {
    dump() {
        console.log("xxx");
    }
}

class MyClass2 {
    static parameters = [MyClass1];

    constructor(obj1: MyClass1) {
    }

    dump() {
        console.log("yyy");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    MyClass1,
    MyClass2,
]);

const obj2 = injector.get(MyClass2);
obj2.dump();
