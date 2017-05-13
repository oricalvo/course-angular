import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouteReuseStrategy, RouterModule} from "@angular/router";
import {routes} from "./routes";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {NotFoundComponent} from "./notFound.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NotFoundComponent,
    ]
})
export class AppModule {
}
