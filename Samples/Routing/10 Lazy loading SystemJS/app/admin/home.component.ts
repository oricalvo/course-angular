import {Component} from "@angular/core";
import {MainService} from "./main.service";

@Component({
    selector: "my-admin-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    moduleId: module.id,
})
export class AdminHomeComponent {
    constructor(mainService: MainService) {
        console.log("AdminHomeComponent");
    }
}
