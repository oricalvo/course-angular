import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EmailComponent} from "./email.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
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
