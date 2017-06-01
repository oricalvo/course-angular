import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ClockComponent} from "./clock.component";
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
        ClockComponent,
    ]
})
export class AppModule {
}
