import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {AdminHomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {MainService} from "./main.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        MainService,
    ],
    declarations: [
        AdminHomeComponent,
    ]
})
export class AdminModule {
    constructor() {
        console.log("AdminModule");
    }
}
