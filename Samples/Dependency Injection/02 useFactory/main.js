"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var A = (function () {
    function A() {
    }
    A.prototype.dump = function () {
        console.log("A");
    };
    return A;
}());
function createA(version) {
    console.log(version);
    return new A();
}
var VERSION = "VERSION";
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: VERSION, useValue: 123 },
    { provide: A, useFactory: createA, deps: [VERSION] },
]);
var obj = injector.get(A);
obj.dump();
