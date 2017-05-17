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
var common_1 = require("@angular/common");
var contact_service_1 = require("./contact.service");
var AppComponent = (function () {
    function AppComponent(compiler, contactService) {
        this.compiler = compiler;
        this.contactService = contactService;
        this.counter = 0;
    }
    AppComponent.prototype.injectTemplate = function () {
        var moduleType = this.createComponent("<h1>{{state.counter}}</h1>");
    };
    AppComponent.prototype.createComponent = function (template) {
        var moduleType = this.createModuleWithComponent(template);
        //const moduleFactory = this.compiler.compileModuleSync(moduleType);
        var moduleFactory = this.compiler.compileModuleAndAllComponentsSync(moduleType);
        var componentFactory = moduleFactory.componentFactories[0];
        var componentRef = this.marker.createComponent(componentFactory);
        componentRef.instance.state = this;
        return moduleType;
    };
    AppComponent.prototype.inc = function () {
        this.counter++;
    };
    AppComponent.prototype.createModuleWithComponent = function (template) {
        var DynamicComponent = (function () {
            function DynamicComponent(contactService) {
                console.log(contactService);
            }
            return DynamicComponent;
        }());
        DynamicComponent = __decorate([
            core_1.Component({
                template: template,
            }),
            __metadata("design:paramtypes", [contact_service_1.ContactService])
        ], DynamicComponent);
        var DynamicModule = (function () {
            function DynamicModule() {
            }
            return DynamicModule;
        }());
        DynamicModule = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                declarations: [DynamicComponent],
            })
        ], DynamicModule);
        return DynamicModule;
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("marker", { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], AppComponent.prototype, "marker", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"],
        moduleId: module.id,
    }),
    __metadata("design:paramtypes", [core_1.Compiler, contact_service_1.ContactService])
], AppComponent);
exports.AppComponent = AppComponent;
