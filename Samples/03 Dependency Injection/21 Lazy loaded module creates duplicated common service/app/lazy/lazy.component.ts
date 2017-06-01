import {Component} from "@angular/core";
import {LazyService} from "./lazy.service";

@Component({
    selector: "lazy-component",
    template: "<h1>Module2 Main</h1>"
})
export class LazyComponent {
    constructor(lazyService: LazyService) {
        console.log("LazyComponent");
    }
}
