import {Component} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
    selector: "my-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"],
    moduleId: module.id,
})
export class ContactComponent {
    id: number;

    constructor(private activatedRoute: ActivatedRoute) {
        this.id = this.activatedRoute.snapshot.params.id;
    }
}
