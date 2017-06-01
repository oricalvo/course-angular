import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "./common/common.module";
import {Module1Module} from "./module1/module1.module";
import {Module2Module} from "./module2/module2.module";
import {MainService as MainService1} from "./module1/main.service";
import {MainService as MainService2} from "./module2/main.service";
import {CommonService} from "./common/common.service";

class MyService {
    constructor() {
        console.log("AppModule: MyService");
    }
}

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        Module1Module,
    ],
    providers: [
        {provide: CommonService, useClass: MyService},
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

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        Module1Module,
    ],
    providers: [
        {provide: CommonService, useClass: MyService},
    ],
    bootstrap: [
        AppComponent,
    ],
    declarations: [
        AppComponent,
    ],
})
export class AppModule {
}
