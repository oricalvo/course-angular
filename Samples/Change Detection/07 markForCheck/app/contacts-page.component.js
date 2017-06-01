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
var contact_list_component_1 = require("./contact-list.component");
var ContactsPageComponent = (function () {
    function ContactsPageComponent() {
        this.counter = 0;
    }
    ContactsPageComponent.prototype.notifyChange = function () {
        ++this.counter;
        this.contactList.notifyChange();
    };
    return ContactsPageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ContactsPageComponent.prototype, "contacts", void 0);
__decorate([
    core_1.ViewChild("contactList"),
    __metadata("design:type", contact_list_component_1.ContactListComponent)
], ContactsPageComponent.prototype, "contactList", void 0);
ContactsPageComponent = __decorate([
    core_1.Component({
        selector: "my-contacts-page",
        templateUrl: "./contacts-page.component.html",
        styleUrls: ["./contacts-page.component.css"],
        moduleId: module.id,
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __metadata("design:paramtypes", [])
], ContactsPageComponent);
exports.ContactsPageComponent = ContactsPageComponent;
