import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
var MyModule = (function () {
    function MyModule() {
    }
    return MyModule;
}());
export { MyModule };
MyModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MainComponent
                ],
                exports: [
                    MainComponent
                ]
            },] },
];
/** @nocollapse */
MyModule.ctorParameters = function () { return []; };
//# sourceMappingURL=my.module.js.map