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
var MyClass2 = (function () {
    function MyClass2(obj1) {
    }
    MyClass2.prototype.dump = function () {
        console.log("yyy");
    };
    return MyClass2;
}());
MyClass2.parameters = [MyClass1];
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    MyClass1,
    MyClass2,
]);
var obj2 = injector.get(MyClass2);
obj2.dump();
