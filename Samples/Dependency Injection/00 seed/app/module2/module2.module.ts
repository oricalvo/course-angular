import {NgModule} from "@angular/core";
import {CommonModule} from "../common/common.module";
import {MainService} from "./main.service";
import {MainComponent} from "./main.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        MainService
    ],
    declarations: [
        MainComponent
    ]
})
export class Module2Module {
    constructor() {
        console.log("Module2");
    }
}
