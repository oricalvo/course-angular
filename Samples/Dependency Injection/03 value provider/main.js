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
exports.a = new A();
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: A, useValue: exports.a },
]);
var obj = injector.get(A);
obj.dump();
