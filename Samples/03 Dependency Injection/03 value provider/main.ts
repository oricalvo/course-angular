import {Injectable, ReflectiveInjector} from "@angular/core";

class A {
    dump() {
        console.log("A");
    }
}

export const a = new A();

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: A, useValue: a},
]);

const obj = injector.get(A);
obj.dump();
