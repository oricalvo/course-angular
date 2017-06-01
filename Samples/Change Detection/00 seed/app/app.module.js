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
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var contact_list_component_1 = require("./contact-list.component");
var contacts_page_component_1 = require("./contacts-page.component");
var contact_service_1 = require("./contact.service");
var contact_component_1 = require("./contact.component");
var AppModule = (function () {
    function AppModule(appRef) {
        var original = appRef.tick;
        appRef.tick = function () {
            var before = performance.now();
            var retVal = original.apply(this, arguments);
            var after = performance.now();
            console.log("ChangeDetection: " + (after - before));
            return retVal;
        };
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
            contacts_page_component_1.ContactsPageComponent,
            contact_component_1.ContactComponent,
        ],
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], AppModule);
exports.AppModule = AppModule;
