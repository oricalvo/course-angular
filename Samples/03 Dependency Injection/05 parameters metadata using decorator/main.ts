import {Injectable, ReflectiveInjector} from "@angular/core";

function Blabla() {
    return function(ctor: any) {
        return ctor;
    }
}

class MyClass1 {
    dump() {
        console.log("class1");
    }
}

@Blabla()
class MyClass2 {
    constructor(obj1: MyClass1) {
    }

    dump() {
        console.log("class2");
    }
}

const providers = [
    MyClass1,
    MyClass2
];

const injector = ReflectiveInjector.resolveAndCreate(providers);

const obj = injector.get(MyClass2);
obj.dump();
