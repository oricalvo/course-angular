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
var common_service_1 = require("./common.service");
var common_component_1 = require("./common.component");
var CommonModule = (function () {
    function CommonModule() {
        console.log("CommonModule");
    }
    CommonModule.forRoot = function () {
        return {
            ngModule: CommonModule,
            providers: [
                common_service_1.CommonService,
            ]
        };
    };
    CommonModule.forChild = function () {
        return {
            ngModule: CommonModule,
            providers: []
        };
    };
    return CommonModule;
}());
CommonModule = __decorate([
    core_1.NgModule({
        declarations: [
            common_component_1.CommonComponent
        ],
        exports: [
            common_component_1.CommonComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], CommonModule);
exports.CommonModule = CommonModule;
var CommonModule = CommonModule_1 = (function () {
    function CommonModule() {
    }
    CommonModule.forRoot = function () {
        return {
            ngModule: CommonModule_1,
            providers: [
                common_service_1.CommonService,
            ]
        };
    };
    CommonModule.forChild = function () {
        return {
            ngModule: CommonModule_1,
        };
    };
    return CommonModule;
}());
CommonModule = CommonModule_1 = __decorate([
    core_1.NgModule({
        declarations: [common_component_1.CommonComponent],
        exports: [common_component_1.CommonComponent]
    })
], CommonModule);
exports.CommonModule = CommonModule;
var CommonModule_1;
