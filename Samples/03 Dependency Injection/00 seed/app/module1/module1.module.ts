import {NgModule} from "@angular/core";
import {CommonModule} from "../common/common.module";
import {MainService} from "./main.service";

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        MainService
    ]
})
export class Module1Module {
    constructor(mainService:MainService) {
    }
}
