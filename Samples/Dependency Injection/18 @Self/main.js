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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyService1 = (function () {
    function MyService1() {
    }
    return MyService1;
}());
MyService1 = __decorate([
    core_1.Injectable()
], MyService1);
var MyService2 = (function () {
    function MyService2(service1) {
        this.service1 = service1;
        console.log(!!service1);
    }
    return MyService2;
}());
MyService2 = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Self()), __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [MyService1])
], MyService2);
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    MyService1,
]);
var child = injector.resolveAndCreateChild([MyService2]);
var obj = child.get(MyService2);
