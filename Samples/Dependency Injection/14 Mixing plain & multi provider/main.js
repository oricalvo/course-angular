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
var MyService1 = (function () {
    function MyService1() {
        console.log("MyService1");
    }
    return MyService1;
}());
MyService1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MyService1);
var MyService2 = (function () {
    function MyService2() {
        console.log("MyService2");
    }
    return MyService2;
}());
MyService2 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], MyService2);
var SERVICES = new core_1.InjectionToken("MyServices");
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: SERVICES, useClass: MyService1, multi: true },
    { provide: SERVICES, useClass: MyService2 },
]);
var obj = injector.get(SERVICES);
console.log(obj);
