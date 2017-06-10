import {TooltipComponent} from "./tooltip.component";
import {TemplateRef} from "@angular/core";

export class TooltipService {
    component: TooltipComponent;

    constructor() {
    }

    register(component: TooltipComponent) {
        this.component = component;
    }
}

