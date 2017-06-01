(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.my = global.my || {}),global._angular_core));
}(this, (function (exports,_angular_core) { 'use strict';

var MainComponent = (function () {
    function MainComponent() {
    }
    return MainComponent;
}());
MainComponent.decorators = [
    { type: _angular_core.Component, args: [{
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
    { type: _angular_core.NgModule, args: [{
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

exports.MyModule = MyModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my.umd.js.map
