"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactService = (function () {
    function ContactService() {
        console.log("ContactService.ctor");
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    return ContactService;
}());
exports.ContactService = ContactService;
