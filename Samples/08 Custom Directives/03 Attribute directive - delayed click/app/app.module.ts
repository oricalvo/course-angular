import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ClickDirective} from "./click.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ClickDirective,
    ],
})
export class AppModule {
}
