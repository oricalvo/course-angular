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
var contact_component_1 = require("./contact.component");
var group_component_1 = require("./group.component");
var AppComponent = (function () {
    function AppComponent(elementRef) {
        var _this = this;
        this.elementRef = elementRef;
        this.items = [
            new group_component_1.Group(1, "Friends"),
            new contact_component_1.Contact(1, "Ori", "ori@gmail.com"),
        ];
        this.map = new Map();
        this.map.set(contact_component_1.Contact, contact_component_1.ContactComponent);
        this.map.set(group_component_1.Group, group_component_1.GroupComponent);
        this.itemToComponentTypeFn = function (item) {
            var componentType = _this.map.get(item.constructor);
            if (!componentType) {
                throw new Error("Unsupported item type");
            }
            return componentType;
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AppComponent);
exports.AppComponent = AppComponent;
