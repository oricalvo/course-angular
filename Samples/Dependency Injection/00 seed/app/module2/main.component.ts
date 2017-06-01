import {Component} from "@angular/core";
import {MainService} from "./main.service";

@Component({
    selector: "module2-main",
    template: "<h1>Module2 Main</h1>"
})
export class MainComponent {
    constructor(mainService: MainService) {
        console.log("Module2.MainComponent");
    }
}
