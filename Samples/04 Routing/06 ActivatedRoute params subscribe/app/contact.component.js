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
var contact_service_1 = require("./contact.service");
var ContactComponent = (function () {
    function ContactComponent(activatedRoute, router, contactService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.contactService = contactService;
        this.id = this.activatedRoute.params.map(function (p) { return p.id; });
        this.contact = this.id.map(function (id) { return contactService.getById(id); });
        this.name = this.contact.map(function (c) { return c.name; });
        this.showMore = this.activatedRoute.params.map(function (p) { return p.showMore; }).map(function (showMore) { return (showMore === true || showMore === "true"); });
        this.showMoreCaption = this.showMore.map(function (more) { return (more ? "Less" : "More"); });
    }
    ContactComponent.prototype.toggleMore = function () {
        this.router.navigate([
            { showMore: !getLatestValue(this.showMore) }
        ], {
            relativeTo: this.activatedRoute
        });
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
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, contact_service_1.ContactService])
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
function getLatestValue(obs) {
    var val;
    var subscription = obs.subscribe(function (v) {
        val = v;
    });
    subscription.unsubscribe();
    return val;
}
