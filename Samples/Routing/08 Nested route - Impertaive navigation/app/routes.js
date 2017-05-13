"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var notFound_component_1 = require("./notFound.component");
var contactsPage_component_1 = require("./contactsPage.component");
var contactList_component_1 = require("./contactList.component");
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
        path: 'contact',
        component: contactsPage_component_1.ContactsPageComponent,
        children: [
            {
                path: ':type',
                component: contactList_component_1.ContactListComponent,
            },
        ]
    },
    {
        path: '**',
        component: notFound_component_1.NotFoundComponent,
    },
];
