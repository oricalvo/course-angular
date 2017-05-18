import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {ContactService} from "./contact.service";

@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [
        ContactService,
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
    ]
})
export class AppModule {
}
