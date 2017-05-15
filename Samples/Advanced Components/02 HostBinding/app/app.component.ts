import {Component, HostBinding} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    @HostBinding("class.external") external: boolean = true;
}
