import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "my-address",
    templateUrl: "./address.component.html",
    styleUrls: ["./address.component.css"],
    moduleId: module.id,
})
export class AddressComponent {
    constructor(activatedRoute: ActivatedRoute) {
        console.log("address", activatedRoute);
        console.log("snapshot", activatedRoute.snapshot);
    }
}
