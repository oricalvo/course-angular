import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {AdminHomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
    ],
    declarations: [
        AdminHomeComponent,
    ]
})
export class AdminModule {
}
