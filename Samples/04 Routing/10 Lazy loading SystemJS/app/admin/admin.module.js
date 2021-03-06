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
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var home_component_1 = require("./home.component");
var common_1 = require("@angular/common");
var main_service_1 = require("./main.service");
var AdminModule = (function () {
    function AdminModule() {
        console.log("AdminModule");
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes_1.routes)
        ],
        providers: [
            main_service_1.MainService,
        ],
        declarations: [
            home_component_1.AdminHomeComponent,
        ]
    }),
    __metadata("design:paramtypes", [])
], AdminModule);
exports.AdminModule = AdminModule;
