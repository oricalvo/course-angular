import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {CanActivateAdmin, routes} from "./routes";
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./notFound.component";
import {AdminComponent} from "./admin.component";
import {AuthService} from "./auth.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        AuthService,
        CanActivateAdmin
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        NotFoundComponent
    ]
})
export class AppModule {
}
