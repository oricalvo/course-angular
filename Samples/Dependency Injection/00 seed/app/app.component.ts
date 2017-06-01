import {Compiler, Component, ElementRef, Injector, ViewChild, ViewContainerRef} from "@angular/core";
import {Module2Module} from "./module2/module2.module";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    constructor() {
    }
}

