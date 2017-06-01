"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var notFound_component_1 = require("./notFound.component");
var admin_component_1 = require("./admin.component");
var core_1 = require("@angular/core");
var InitAppGuard = (function () {
    function InitAppGuard() {
    }
    InitAppGuard.prototype.canActivate = function (route, state) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 3000);
        });
    };
    return InitAppGuard;
}());
InitAppGuard = __decorate([
    core_1.Injectable()
], InitAppGuard);
exports.InitAppGuard = InitAppGuard;
exports.routes = [
    {
        path: "",
        canActivate: [InitAppGuard],
        children: [
            {
                path: '',
                redirectTo: "home",
                pathMatch: "full",
            },
            {
                path: 'home',
                component: home_component_1.HomeComponent,
                children: [
                    {
                        path: 'more',
                        component: home_component_1.HomeMoreComponent,
                    },
                ],
            },
            {
                path: 'admin',
                component: admin_component_1.AdminComponent,
            },
            {
                path: '**',
                component: notFound_component_1.NotFoundComponent,
            },
        ]
    },
];
