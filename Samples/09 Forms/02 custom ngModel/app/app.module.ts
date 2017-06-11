import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {EmailComponent} from "./email.component";

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
        EmailComponent,
    ],
})
export class AppModule {
}
