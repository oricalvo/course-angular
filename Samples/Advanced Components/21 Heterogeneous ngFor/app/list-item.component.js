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
var ListItemComponent = (function () {
    function ListItemComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ListItemComponent.prototype.ngOnChanges = function () {
        if (this.componentRef != null) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        if (this.item != null) {
            var componentType = this.itemToComponentType(this.item);
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.marker.createComponent(componentFactory);
            this.componentRef.instance["item"] = this.item;
        }
    };
    return ListItemComponent;
}());
__decorate([
    core_1.ViewChild("marker", { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], ListItemComponent.prototype, "marker", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListItemComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListItemComponent.prototype, "itemToComponentType", void 0);
ListItemComponent = __decorate([
    core_1.Component({
        selector: "my-list-item",
        templateUrl: "./list-item.component.html",
        styleUrls: ["./list-item.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], ListItemComponent);
exports.ListItemComponent = ListItemComponent;
