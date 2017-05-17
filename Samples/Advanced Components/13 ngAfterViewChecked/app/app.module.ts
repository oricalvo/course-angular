import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ContactListComponent} from "./contactList.component";
import {BrowserModule} from "@angular/platform-browser";
import {DialogComponent} from "./dialog.component";
import {ContactComponent} from "./contact.component";

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
        ContactComponent,
        ContactListComponent,
        DialogComponent,
    ]
})
export class AppModule {
}
