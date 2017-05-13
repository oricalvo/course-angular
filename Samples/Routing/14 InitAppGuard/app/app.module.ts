import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HomeComponent, HomeMoreComponent} from "./home.component";
import {NotFoundComponent} from "./notFound.component";
import {AdminComponent} from "./admin.component";
import {AuthService} from "./auth.service";
import {InitAppGuard, routes} from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        AuthService,
        InitAppGuard
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeMoreComponent,
        AdminComponent,
        NotFoundComponent
    ]
})
export class AppModule {
}
