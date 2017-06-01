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
var forms_1 = require("@angular/forms");
var contact_list_component_1 = require("./contact-list.component");
var contact_list_item_component_1 = require("./contact-list-item.component");
var status_component_1 = require("./status.component");
var contact_service_1 = require("./contact.service");
var contact_page_component_1 = require("./contact-page.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
        ],
        providers: [
            contact_service_1.ContactService,
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ],
        declarations: [
            app_component_1.AppComponent,
            contact_list_component_1.ContactListComponent,
            contact_list_item_component_1.ContactListItemComponent,
            status_component_1.StatusComponent,
            contact_page_component_1.ContactPageComponent,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
