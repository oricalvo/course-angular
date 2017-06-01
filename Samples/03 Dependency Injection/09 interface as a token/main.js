"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MyService = (function () {
    function MyService() {
    }
    MyService.prototype.doSomething = function () {
        console.log("MyService");
    };
    return MyService;
}());
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: IMyService, useClass: MyService },
]);
var obj = injector.get(IMyService);
obj.dump();
