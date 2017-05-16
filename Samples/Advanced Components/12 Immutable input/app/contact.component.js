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
var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ContactViewModel)
], ContactComponent.prototype, "contact", void 0);
ContactComponent = __decorate([
    core_1.Component({
        selector: "my-contact",
        templateUrl: "./contact.component.html",
        styleUrls: ["./contact.component.css"],
        moduleId: module.id,
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
var ContactViewModel = (function () {
    function ContactViewModel(options) {
        this.change(options);
    }
    ContactViewModel.prototype.change = function (options) {
        Object.assign(this, options);
        this.fullName = this.id + ": " + this.name;
    };
    return ContactViewModel;
}());
exports.ContactViewModel = ContactViewModel;
