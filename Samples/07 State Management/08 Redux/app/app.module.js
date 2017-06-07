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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var contact_list_component_1 = require("./components/contact-list.component");
var contact_list_item_component_1 = require("./components/contact-list-item.component");
var contact_page_component_1 = require("./components/contact-page.component");
var contact_search_component_1 = require("./components/contact-search.component");
var app_store_1 = require("./services/app.store");
var root_reducer_1 = require("./services/root.reducer");
var AppModule = (function () {
    function AppModule(applicationRef, appStore) {
        appStore.dispatch(root_reducer_1.applyFilter());
        var original = applicationRef.tick;
        applicationRef.tick = function () {
            var before = performance.now();
            original.apply(this, arguments);
            var after = performance.now();
            console.log("tick", (after - before));
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
            app_store_1.APPSTORE_PROVIDERS
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ],
        declarations: [
            app_component_1.AppComponent,
            contact_list_component_1.ContactListComponent,
            contact_list_item_component_1.ContactListItemComponent,
            contact_page_component_1.ContactPageComponent,
            contact_search_component_1.ContactSearchComponent
        ],
    }),
    __param(1, core_1.Inject(app_store_1.APP_STORE)),
    __metadata("design:paramtypes", [core_1.ApplicationRef, Object])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map