import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "my-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"],
    moduleId: module.id,
})
export class AboutComponent {
    constructor(activatedRoute: ActivatedRoute) {
        console.log("about", activatedRoute);
        console.log("snapshot", activatedRoute.snapshot);
    }
}
