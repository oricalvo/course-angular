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
var ContactListComponent = (function () {
    function ContactListComponent() {
        console.log("contactList: ctor");
        this.contacts = [
            { "id": 1, "name": "Ori" },
        ];
    }
    ContactListComponent.prototype.ngOnChanges = function () {
        console.log("contactList: ngOnChanges");
    };
    ContactListComponent.prototype.ngOnInit = function () {
        console.log("contactList: ngOnInit");
    };
    ContactListComponent.prototype.ngDoCheck = function () {
        console.log("contactList: ngDoCheck");
    };
    ContactListComponent.prototype.ngAfterContentInit = function () {
        console.log("contactList: ngAfterContentInit");
    };
    ContactListComponent.prototype.ngAfterContentChecked = function () {
        console.log("contactList: ngAfterContentChecked");
    };
    ContactListComponent.prototype.ngAfterViewInit = function () {
        console.log("contactList: ngAfterViewInit");
    };
    ContactListComponent.prototype.ngAfterViewChecked = function () {
        console.log("contactList: ngAfterViewChecked");
    };
    ContactListComponent.prototype.ngOnDestroy = function () {
        console.log("contactList: ngOnDestroy");
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    core_1.Component({
        selector: "my-contact-list",
        templateUrl: "./contactList.component.html",
        styleUrls: ["./contactList.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
