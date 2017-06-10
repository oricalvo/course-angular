import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {Dir1Directive, Dir2Directive} from "./if.directive";

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
        Dir1Directive,
        Dir2Directive
    ],
})
export class AppModule {
}
