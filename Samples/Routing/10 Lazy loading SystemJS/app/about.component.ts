import {Component} from "@angular/core";

@Component({
    selector: "my-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.css"],
    moduleId: module.id,
})
export class AboutComponent {
    constructor() {
        console.log("About.ctor");
    }

    ngOnDestroy() {
        console.log("About.ngOnDestroy");
    }
}
