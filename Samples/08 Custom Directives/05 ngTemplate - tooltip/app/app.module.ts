import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {TooltipDirective} from "./tooltip.directive";
import {TooltipComponent} from "./tooltip.component";
import {TooltipService} from "./tooltip.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        TooltipService
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
        TooltipDirective,
        TooltipComponent,
    ],
})
export class AppModule {
}
