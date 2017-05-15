import {Component, HostBinding, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Native,
})
export class AppComponent {
}
