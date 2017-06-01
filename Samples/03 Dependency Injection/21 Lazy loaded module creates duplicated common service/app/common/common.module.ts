import {NgModule} from "@angular/core";
import {CommonService} from "./common.service";

@NgModule({
    providers: [
        CommonService,
    ],
})
export class CommonModule {
    constructor() {
        console.log("CommonModule");
    }
}
