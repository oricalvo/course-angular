"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function Blabla() {
    return function (ctor) {
        return ctor;
    };
}
var MyClass1 = (function () {
    function MyClass1() {
    }
    MyClass1.prototype.dump = function () {
        console.log("class1");
    };
    return MyClass1;
}());
var MyClass2 = (function () {
    function MyClass2(obj1) {
    }
    MyClass2.prototype.dump = function () {
        console.log("class2");
    };
    return MyClass2;
}());
MyClass2 = __decorate([
    Blabla(),
    __metadata("design:paramtypes", [MyClass1])
], MyClass2);
var providers = [
    MyClass1,
    MyClass2
];
var injector = core_1.ReflectiveInjector.resolveAndCreate(providers);
var obj = injector.get(MyClass2);
obj.dump();
