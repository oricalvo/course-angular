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
var ContactComponent = (function () {
    function ContactComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        activatedRoute.params.subscribe(function (value) {
            console.log(value);
        });
    }
    Object.defineProperty(ContactComponent.prototype, "id", {
        get: function () {
            return this.activatedRoute.snapshot.params.id;
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.more = function () {
        this.router.navigate([".", { more: !this.activatedRoute.snapshot.params.more }], { relativeTo: this.activatedRoute });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: "my-contact",
        templateUrl: "./contact.component.html",
        styleUrls: ["./contact.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], ContactComponent);
exports.ContactComponent = ContactComponent;
var ContactComponentGuard = (function () {
    function ContactComponentGuard() {
    }
    ContactComponentGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    return ContactComponentGuard;
}());
exports.ContactComponentGuard = ContactComponentGuard;
