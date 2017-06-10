import {Component, TemplateRef, ViewChild} from "@angular/core";
import {TabDirective} from "./tab.directive";

@Component({
    selector: "my-panel",
    templateUrl: "./panel.component.html",
    styleUrls: ["./panel.component.css"],
    moduleId: module.id,
    //viewProviders: [TabDirective]
})
export class PanelComponent {
    constructor() {
    }
}
