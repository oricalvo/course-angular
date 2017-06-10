import {Component, ElementRef, TemplateRef, ViewChild} from "@angular/core";
import {TooltipDirective} from "./tooltip.directive";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    @ViewChild("buttonTooltip") buttonTooltip: TooltipDirective;
    @ViewChild("tooltipTemplate") tooltipTemplate: TemplateRef<any>;

    constructor() {
    }

    ngOnInit() {
        console.log(this.buttonTooltip);
        console.log("template", this.tooltipTemplate);
    }

    select(contact) {
        contact.selected = !contact.selected;
    }

    close() {
        this.buttonTooltip.close();
    }
}
