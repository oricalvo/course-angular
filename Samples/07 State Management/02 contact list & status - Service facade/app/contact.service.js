"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactService = (function () {
    function ContactService() {
        this.contacts = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
            { "id": 3, "name": "Udi" },
            { "id": 4, "name": "Tommy" },
        ];
        this.selected = [];
    }
    ContactService.prototype.changeSelection = function (contact, selected) {
        contact.selected = selected;
        var index = this.selected.findIndex(function (c) { return c == contact; });
        if (contact.selected) {
            if (index == -1) {
                this.selected.push(contact);
            }
        }
        else {
            if (index != -1) {
                this.selected.splice(index, 1);
            }
        }
    };
    return ContactService;
}());
exports.ContactService = ContactService;
