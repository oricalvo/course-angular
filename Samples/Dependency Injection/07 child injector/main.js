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
var injector = core_1.ReflectiveInjector.resolveAndCreate([A]);
var childInjector = injector.resolveAndCreateChild([B]);
var a1 = injector.get(A);
var a2 = childInjector.get(A);
console.log(a1 == a2);
var obj2 = childInjector.get(B);
