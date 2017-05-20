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
var clock_component_1 = require("./clock.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.toggle = function () {
        this.showClocks = !this.showClocks;
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
        console.log(this.clock1);
        console.log(this.clock2);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("clock1"),
    __metadata("design:type", clock_component_1.ClockComponent)
], AppComponent.prototype, "clock1", void 0);
__decorate([
    core_1.ViewChild("clock2"),
    __metadata("design:type", clock_component_1.ClockComponent)
], AppComponent.prototype, "clock2", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"],
        moduleId: module.id,
    })
], AppComponent);
exports.AppComponent = AppComponent;
