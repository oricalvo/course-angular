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
var main_service_1 = require("./main.service");
var main_component_1 = require("./main.component");
var Module2Module = (function () {
    function Module2Module() {
        console.log("Module2");
    }
    return Module2Module;
}());
Module2Module = __decorate([
    core_1.NgModule({
        imports: [
            common_module_1.CommonModule,
        ],
        providers: [
            main_service_1.MainService
        ],
        declarations: [
            main_component_1.MainComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], Module2Module);
exports.Module2Module = Module2Module;
