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
var common_module_1 = require("../common/common.module");
var lazy_service_1 = require("./lazy.service");
var lazy_component_1 = require("./lazy.component");
var LazyModule = (function () {
    function LazyModule() {
        console.log("LazyModule");
    }
    return LazyModule;
}());
LazyModule = __decorate([
    core_1.NgModule({
        imports: [
            common_module_1.CommonModule.forChild(),
        ],
        providers: [
            lazy_service_1.LazyService
        ],
        declarations: [
            lazy_component_1.LazyComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], LazyModule);
exports.LazyModule = LazyModule;
