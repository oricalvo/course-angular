import {Component} from "@angular/core";
@Component({
    selector: "common-component",
    template: "<h1>Common Component</h1>"
})
export class CommonComponent {
    constructor() {
        console.log("CommonComponent");
    }
}
