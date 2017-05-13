"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var notFound_component_1 = require("./notFound.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'admin',
        loadChildren: "app/admin/admin.module#AdminModule"
    },
    {
        path: '**',
        component: notFound_component_1.NotFoundComponent,
    },
];
