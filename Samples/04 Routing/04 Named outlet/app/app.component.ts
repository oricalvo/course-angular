import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {routes} from "./routes";
import {AboutComponent} from "./about.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    constructor(private router: Router) {
    }

    gotoAbout() {
this.router.navigate([
    '/about',
    1,
    {name: 'xxx'},
    {
        outlets: {
            left: [
                'address',
                {id: 123}
            ],
            right: [
                'website'
            ]
        }
    }
]);

        return false;
    }
}
