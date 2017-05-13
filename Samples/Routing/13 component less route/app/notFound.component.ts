import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {routes} from "./routes";

@Component({
    selector: "my-notfound",
    template: "<h1>Not Found</h1>",
    moduleId: module.id,
})
export class NotFoundComponent {
    constructor(router: Router) {
    }
}
