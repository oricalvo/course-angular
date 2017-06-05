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
var mobx_1 = require("mobx");
var nextId = -1;
var Contact = (function () {
    function Contact(name) {
        this.id = Math.random();
        this.id = nextId--;
        this.name = name;
    }
    return Contact;
}());
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
exports.Contact = Contact;
var ContactList = (function () {
    function ContactList() {
        this.contacts = [];
    }
    Object.defineProperty(ContactList.prototype, "total", {
        get: function () {
            return this.contacts.length;
        },
        enumerable: true,
        configurable: true
    });
    return ContactList;
}());
__decorate([
    mobx_1.observable,
    __metadata("design:type", Array)
], ContactList.prototype, "contacts", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ContactList.prototype, "total", null);
exports.ContactList = ContactList;
//# sourceMappingURL=contacts.js.map