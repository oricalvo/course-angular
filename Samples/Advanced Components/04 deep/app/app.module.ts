import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ContactListComponent} from "./contactList.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ContactListComponent,
    ]
})
export class AppModule {
}
