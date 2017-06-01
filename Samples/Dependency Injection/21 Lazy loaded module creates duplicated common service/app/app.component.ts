import {Compiler, Component, ElementRef, Injector, ViewChild, ViewContainerRef} from "@angular/core";
import {CommonService} from "./common/common.service";

declare var SystemJS;

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    @ViewChild("marker", {read: ViewContainerRef}) marker: ViewContainerRef;

    constructor(commonService: CommonService, private compiler: Compiler, private injector: Injector) {
        console.log("AppComponent");
    }

    async run() {
const {LazyModule} = await SystemJS.import("app/lazy/lazy.module.js");
const {ngModuleFactory, componentFactories} = this.compiler.compileModuleAndAllComponentsSync(LazyModule);
const moduleInjector = ngModuleFactory.create(this.injector);
const componentFactory = componentFactories[0];

this.marker.createComponent(componentFactory, 0, <any>moduleInjector);
    }
}

