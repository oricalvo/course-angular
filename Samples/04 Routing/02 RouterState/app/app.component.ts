import {Component} from "@angular/core";
import {Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {routes} from "./routes";
import {AboutComponent} from "./about.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    constructor(router: Router) {
    }
}
