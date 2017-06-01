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
var contact_service_1 = require("./contact.service");
var ContactListItemComponent = (function () {
    function ContactListItemComponent(contactService) {
        this.contactService = contactService;
    }
    ContactListItemComponent.prototype.changeSelection = function (contact, selected) {
        this.contactService.changeSelection(contact, selected);
    };
    return ContactListItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContactListItemComponent.prototype, "contact", void 0);
ContactListItemComponent = __decorate([
    core_1.Component({
        selector: "my-contact-list-item",
        templateUrl: "./contact-list-item.component.html",
        styleUrls: ["./contact-list-item.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactListItemComponent);
exports.ContactListItemComponent = ContactListItemComponent;
