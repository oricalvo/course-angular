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
var routes_1 = require("./routes");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var contact_service_1 = require("./contact.service");
var notFound_component_1 = require("./notFound.component");
var contactsPage_component_1 = require("./contactsPage.component");
var contactList_component_1 = require("./contactList.component");
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
            contactList_component_1.ContactListComponent,
            contact_service_1.ContactService,
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            contactsPage_component_1.ContactsPageComponent,
            contactList_component_1.ContactListComponent,
            notFound_component_1.NotFoundComponent,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
