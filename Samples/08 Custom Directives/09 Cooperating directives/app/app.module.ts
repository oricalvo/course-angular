import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {PageDirective, TabDirective} from "./tab.directive";
import {PanelComponent} from "./panel.component";

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
        PanelComponent,
        TabDirective,
        PageDirective,
    ],
})
export class AppModule {
}
