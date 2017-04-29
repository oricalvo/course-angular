import {Injectable, ReflectiveInjector} from "@angular/core";

class MyClass1 {
    dump() {
        console.log("class1");
    }
}

class MyClass2 {
    dump() {
        console.log("class2");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: "myService", useClass: MyClass1},
    {provide: "myService", useClass: MyClass2},
]);

const obj = injector.get("myService");
console.log(obj instanceof MyClass2);

