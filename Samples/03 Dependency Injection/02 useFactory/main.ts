import {Injectable, ReflectiveInjector} from "@angular/core";

class A {
    dump() {
        console.log("A");
    }
}

function createA(version: number) {
    console.log(version);

    return new A();
}

const VERSION = "VERSION";

const injector = ReflectiveInjector.resolveAndCreate([
    {provide: VERSION, useValue: 123},
    {provide: A, useFactory: createA, deps: [VERSION]},
]);

const obj = injector.get(A);
obj.dump();
