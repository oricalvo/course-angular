import {Injectable, ReflectiveInjector} from "@angular/core";

class A {
    dump() {
        console.log("A");
    }
}

class B {
    dump() {
        console.log("B");
    }
}

const injector = ReflectiveInjector.resolveAndCreate([A]);
const childInjector = injector.resolveAndCreateChild([B]);

const a1 = injector.get(A);
const a2 = childInjector.get(A);
console.log(a1 == a2);

const obj2 = childInjector.get(B);
