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
var selection_service_1 = require("./selection.service");
var search_service_1 = require("./search.service");
var core_1 = require("@angular/core");
var contact_service_1 = require("./contact.service");
var RootService = (function () {
    function RootService(contactService, selectionService, searchService) {
        this.contactService = contactService;
        this.selectionService = selectionService;
        this.searchService = searchService;
    }
    RootService.prototype.init = function () {
        var all = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
            { "id": 3, "name": "Udi" },
            { "id": 4, "name": "Tommy" },
        ];
        this.contactService.onChanges(all);
        this.searchService.onChanges(all);
        this.show = true;
    };
    RootService.prototype.select = function (contact, selected) {
        this.selectionService.change(contact, selected);
    };
    RootService.prototype.search = function (filter) {
        this.searchService.search(filter);
    };
    RootService.prototype.toggleList = function () {
        this.show = !this.show;
    };
    return RootService;
}());
RootService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        selection_service_1.SelectionService,
        search_service_1.SearchService])
], RootService);
exports.RootService = RootService;
