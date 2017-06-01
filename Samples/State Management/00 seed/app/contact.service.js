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
    ContactService.prototype.toggleSelection = function (contact) {
        contact.selected = !contact.selected;
        if (contact.selected) {
            this.selected.push(contact);
        }
        else {
            var index = this.contacts.findIndex(function (c) { return c.id == contact.id; });
            if (index != -1) {
                this.selected.splice(index, 1);
            }
        }
    };
    return ContactService;
}());
exports.ContactService = ContactService;
