import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "./common/common.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
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
    constructor() {
        console.log("AppModule");
    }
}
