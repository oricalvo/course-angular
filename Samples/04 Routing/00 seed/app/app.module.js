"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var notFound_component_1 = require("./notFound.component");
var admin_component_1 = require("./admin.component");
var auth_service_1 = require("./auth.service");
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.routes)
        ],
        providers: [
            auth_service_1.AuthService,
            routes_1.InitAppGuard
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            home_component_1.HomeMoreComponent,
            admin_component_1.AdminComponent,
            notFound_component_1.NotFoundComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
