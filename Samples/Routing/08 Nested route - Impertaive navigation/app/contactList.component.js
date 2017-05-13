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
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var ContactListComponent = (function () {
    function ContactListComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        console.log("router", router);
        console.log("activatedRoute", activatedRoute);
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.type = this.activatedRoute.params.map(function (p) { return p.type; });
    };
    ContactListComponent.prototype.up = function () {
        this.router.navigate([".."], { relativeTo: this.activatedRoute });
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ContactListComponent);
exports.ContactListComponent = ContactListComponent;
