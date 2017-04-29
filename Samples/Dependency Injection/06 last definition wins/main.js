"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyClass1 = (function () {
    function MyClass1() {
    }
    MyClass1.prototype.dump = function () {
        console.log("class1");
    };
    return MyClass1;
}());
var MyClass2 = (function () {
    function MyClass2() {
    }
    MyClass2.prototype.dump = function () {
        console.log("class2");
    };
    return MyClass2;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: "myService", useClass: MyClass1 },
    { provide: "myService", useClass: MyClass2 },
]);
var obj = injector.get("myService");
console.log(obj instanceof MyClass2);
