import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {routes} from "./routes";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    constructor(private router: Router) {
        router.events.subscribe(ev => {
            console.log(ev);
        });
    }

    gotoAdmin() {
        this.router.navigate(["admin"]).then(res=> {
            console.log("YYY", res);
        }).catch(err => {
            console.log("XXX", err);
        });
    }
}
