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
var B = (function () {
    function B() {
    }
    B.prototype.dump = function () {
        console.log("B");
    };
    return B;
}());
var CORE_PROVIDERS = [
    A
];
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    CORE_PROVIDERS,
    B,
    { provide: A, useExisting: B },
]);
var a = injector.get(A);
var b = injector.get(B);
console.log(a == b);
