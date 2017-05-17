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
    function ContactListComponent(elementRef) {
        this.elementRef = elementRef;
        this.contacts = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" }
        ];
    }
    ContactListComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.dump();
    };
    ContactListComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
        this.dump();
    };
    ContactListComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
        this.dump();
    };
    ContactListComponent.prototype.dump = function () {
        var res = [];
        for (var _i = 0, _a = this.elementRef.nativeElement.querySelectorAll("my-contact span.name"); _i < _a.length; _i++) {
            var x = _a[_i];
            res.push(x);
        }
        console.log(res.map(function (s) { return s.innerText; }));
    };
    ContactListComponent.prototype.change = function () {
        this.contacts[0].name = "XXX";
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
    __metadata("design:paramtypes", [core_1.ElementRef])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
