"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ContactService = (function () {
    function ContactService() {
        this.contacts = [
            { "id": 1, "name": "Ori" },
            { "id": 2, "name": "Roni" },
        ];
    }
    ContactService.prototype.change = function () {
        //this.contacts.push({id:3, name: "Udi"});
        this.contacts[0] = __assign({}, this.contacts[0], { name: "XXX" });
        this.contacts = this.contacts.concat([{ id: 3, name: "Udi" }]);
    };
    return ContactService;
}());
exports.ContactService = ContactService;
