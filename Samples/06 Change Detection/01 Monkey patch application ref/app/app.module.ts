import {ApplicationRef, NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
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
