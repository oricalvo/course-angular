"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var address_component_1 = require("./address.component");
var website_component_1 = require("./website.component");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'about/:id',
        component: about_component_1.AboutComponent,
        children: [
            {
                outlet: "left",
                path: 'address',
                component: address_component_1.AddressComponent,
            },
            {
                outlet: "right",
                path: 'website',
                component: website_component_1.WebsiteComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo: "",
    },
];
