import {NgModule} from "@angular/core";
import {CommonModule} from "../common/common.module";
import {LazyService} from "./lazy.service";
import {LazyComponent} from "./lazy.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        LazyService
    ],
    declarations: [
        LazyComponent
    ]
})
export class LazyModule {
    constructor() {
        console.log("LazyModule");
    }
}
