"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IMY_SERVICE = new core_1.InjectionToken("xxx");
var MyService = (function () {
    function MyService() {
    }
    MyService.prototype.doSomething = function () {
        console.log("MyService");
    };
    return MyService;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: IMY_SERVICE, useClass: MyService },
]);
var obj = injector.get(IMY_SERVICE);
obj.doSomething();
