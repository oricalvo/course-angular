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

const CORE_PROVIDERS = [
    A
];

const injector = ReflectiveInjector.resolveAndCreate([
    CORE_PROVIDERS,
    B,
    {provide: A, useExisting: B},
]);

const a = injector.get(A);
const b = injector.get(B);
console.log(a == b);

