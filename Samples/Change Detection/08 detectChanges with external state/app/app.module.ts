import {ApplicationRef, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactListComponent} from "./contact-list.component";
import {ContactsPageComponent} from "./contacts-page.component";
import {ContactService} from "./contact.service";
import {ContactComponent} from "./contact.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        ContactService,
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        ContactListComponent,
        ContactsPageComponent,
        ContactComponent,
    ],
})
export class AppModule {
    constructor(appRef: ApplicationRef) {
        const original = appRef.tick;

        appRef.tick = function() {
            const before = performance.now();
            const retVal = original.apply(this, arguments);
            const after = performance.now();

            console.log("ChangeDetection: " + (after-before));

            return retVal;
        }
    }
}
