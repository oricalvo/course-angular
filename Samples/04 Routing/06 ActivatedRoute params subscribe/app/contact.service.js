"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactService = (function () {
    function ContactService() {
        this.contacts = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
        ];
    }
    ContactService.prototype.getById = function (id) {
        var contact = this.contacts.find(function (c) { return c.id == id; });
        if (contact == null) {
            throw new Error("Contact with id: " + id + " was not found");
        }
        return contact;
    };
    return ContactService;
}());
exports.ContactService = ContactService;
