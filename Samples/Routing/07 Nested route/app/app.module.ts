import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {ContactComponent, ContactComponentGuard} from "./contact.component";
import {ContactService} from "./contact.service";
import {NotFoundComponent} from "./notFound.component";
import {ContactsPageComponent} from "./contactsPage.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        ContactComponentGuard,
        ContactService,
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactsPageComponent,
        ContactComponent,
        NotFoundComponent,
    ]
})
export class AppModule {
}
