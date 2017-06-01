import { Component, NgModule } from '@angular/core';

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent.decorators = [
    { type: Component, args: [{
                selector: "module1-component",
                template: "Module1 Component",
            },] },
];
/** @nocollapse */
MainComponent.ctorParameters = function () { return []; };

var MyModule = (function () {
    function MyModule() {
    }
    return MyModule;
}());
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

export { MyModule };
//# sourceMappingURL=my.es6.js.map
