import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "my-website",
    templateUrl: "./website.component.html",
    styleUrls: ["./website.component.css"],
    moduleId: module.id,
})
export class WebsiteComponent {
    constructor(activatedRoute: ActivatedRoute) {
        console.log("website", activatedRoute);
        console.log("snapshot", activatedRoute.snapshot);
    }
}
