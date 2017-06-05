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
var contact_service_1 = require("../services/contact.service");
var selection_service_1 = require("../services/selection.service");
var StatusComponent = (function () {
    function StatusComponent(selectionService, contactService) {
        this.selectionService = selectionService;
        this.contactService = contactService;
    }
    Object.defineProperty(StatusComponent.prototype, "selected", {
        get: function () {
            return this.selectionService.selectedCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatusComponent.prototype, "total", {
        get: function () {
            return this.contactService.all ? this.contactService.all.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    return StatusComponent;
}());
StatusComponent = __decorate([
    core_1.Component({
        selector: "my-status",
        templateUrl: "./status.component.html",
        styleUrls: ["./status.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [selection_service_1.SelectionService, contact_service_1.ContactService])
], StatusComponent);
exports.StatusComponent = StatusComponent;
