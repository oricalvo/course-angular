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
    constructor(router: Router) {

        setTimeout(function () {
            router.config.push(                {
                path: 'about',
                component: AboutComponent,
            });

            // routes.push(
            //     {
            //         path: 'about',
            //         component: AboutComponent,
            //     });
            //
            // router.resetConfig(routes);

            console.log("xxx");
        }, 3000);
    }
}
