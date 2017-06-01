"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyClass1 = (function () {
    function MyClass1() {
    }
    MyClass1.prototype.dump = function () {
        console.log("xxx");
    };
    return MyClass1;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    MyClass1,
]);
var obj = injector.get(MyClass1);
