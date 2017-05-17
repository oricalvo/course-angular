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
var common_1 = require("@angular/common");
var AppComponent = (function () {
    function AppComponent(compiler) {
        this.compiler = compiler;
    }
    AppComponent.prototype.compileModule = function () {
        var moduleFactory = this.compiler.compileModuleSync(this.createModule());
        console.log(moduleFactory);
    };
    AppComponent.prototype.createModule = function () {
        var DynamicModule = (function () {
            function DynamicModule() {
            }
            return DynamicModule;
        }());
        DynamicModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule],
                declarations: []
            })
        ], DynamicModule);
        return DynamicModule;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [core_1.Compiler])
], AppComponent);
exports.AppComponent = AppComponent;
