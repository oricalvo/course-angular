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
var contact_component_1 = require("./contact.component");
var list_item_component_1 = require("./list-item.component");
var group_component_1 = require("./group.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
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
        providers: [],
        bootstrap: [
            app_component_1.AppComponent,
        ],
        declarations: [
            app_component_1.AppComponent,
            contact_component_1.ContactComponent,
            group_component_1.GroupComponent,
            list_item_component_1.ListItemComponent,
        ],
        entryComponents: [
            contact_component_1.ContactComponent,
            group_component_1.GroupComponent,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
