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
var home_component_1 = require("./home.component");
var notFound_component_1 = require("./notFound.component");
var admin_component_1 = require("./admin.component");
var auth_service_1 = require("./auth.service");
var core_1 = require("@angular/core");
var AuthorizeGuard = (function () {
    function AuthorizeGuard(authService) {
        this.authService = authService;
    }
    AuthorizeGuard.prototype.canActivate = function (route, state) {
        console.log("canActivate", route);
        return this.authService.isInRole(route.data.roles || ["user"]);
    };
    AuthorizeGuard.prototype.canActivateChild = function (route, state) {
        console.log("canActivateChild", route);
        return this.authService.isInRole(route.data.roles || ["user"]);
    };
    return AuthorizeGuard;
}());
AuthorizeGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthorizeGuard);
exports.AuthorizeGuard = AuthorizeGuard;
exports.routes = [
    {
        path: "",
        canActivate: [AuthorizeGuard],
        canActivateChild: [AuthorizeGuard],
        children: [
            {
                path: '',
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: 'home',
                component: home_component_1.HomeComponent,
                data: {
                    roles: ["user"],
                },
                children: [
                    {
                        path: 'more',
                        component: home_component_1.HomeMoreComponent,
                        data: {
                            roles: ["user"],
                        }
                    },
                ],
            },
            {
                path: 'admin',
                component: admin_component_1.AdminComponent,
                data: {
                    roles: ["admin"],
                },
            },
            {
                path: '**',
                component: notFound_component_1.NotFoundComponent,
            },
        ]
    },
];
