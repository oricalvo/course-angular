"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var notFound_component_1 = require("./notFound.component");
var contactsPage_component_1 = require("./contactsPage.component");
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
    },
    {
        path: 'contact/:id',
        component: contact_component_1.ContactComponent,
        canActivate: [contact_component_1.ContactComponentGuard],
    },
    {
        path: '**',
        component: notFound_component_1.NotFoundComponent,
    },
];
