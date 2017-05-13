import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    constructor(private routeState: ActivatedRoute) {
    }

    get id() {
        return this.routeState.snapshot.params.id;
    }
}
