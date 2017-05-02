import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {MyService} from "./MyService";
import {ClockComponent} from "./clock.component";
import {HeaderComponent} from "./header.component";
import {DialogComponent} from "./dialog.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ClockComponent,
        HeaderComponent,
        DialogComponent,
    ],
    bootstrap: [AppComponent],
    providers: [
    ]
})
export class AppModule {
}
