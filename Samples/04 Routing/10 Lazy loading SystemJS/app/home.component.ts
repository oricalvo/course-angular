import {Component} from "@angular/core";

@Component({
    selector: "my-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    moduleId: module.id,
})
export class HomeComponent {
    constructor() {
        console.log("Home.ctor");
    }

    ngOnDestroy() {
        console.log("Home.ngOnDestroy");
    }
}
