import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ContactComponent} from "./contact.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ContactComponent,
    ]
})
export class AppModule {
}
