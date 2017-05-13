import {Component} from "@angular/core";
import {ActivatedRoute, CanActivate} from "@angular/router";

@Component({
    selector: "my-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.css"],
    moduleId: module.id,
})
export class AdminComponent {
    constructor(activatedRoute: ActivatedRoute) {
    }
}
