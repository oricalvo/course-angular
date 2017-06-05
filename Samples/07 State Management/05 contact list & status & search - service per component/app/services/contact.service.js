"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactService = (function () {
    function ContactService() {
    }
    ContactService.prototype.onChanges = function (all) {
        this.all = all;
    };
    ContactService.prototype.refresh = function () {
        this.all = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
            { "id": 3, "name": "Udi" },
        ];
    };
    return ContactService;
}());
exports.ContactService = ContactService;
